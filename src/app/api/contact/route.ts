import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validação básica
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Todos os campos são obrigatórios' },
                { status: 400 }
            );
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // Enviar email usando Resend
        // NOTA: No modo de teste do Resend, emails só podem ser enviados
        // para o email verificado da conta. Para enviar para outros emails,
        // você precisa verificar um domínio em resend.com/domains
        const data = await resend.emails.send({
            from: 'Peacore Website <onboarding@resend.dev>',
            to: ['leofgrupioni@gmail.com'], // Email verificado na conta Resend
            replyTo: email, // Email do cliente que preencheu o formulário
            subject: `Novo contato de ${name}`,
            html: `
                <h2>Novo contato recebido do site Peacore</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p style="color: #666; font-size: 12px;">
                    Para responder este contato, apenas clique em "Responder" - 
                    o email será enviado diretamente para ${email}
                </p>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Email enviado com sucesso!', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { error: 'Erro ao enviar email. Por favor, tente novamente.' },
            { status: 500 }
        );
    }
}
