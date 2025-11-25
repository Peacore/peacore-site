import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import { App, ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import theme from '@/theme/themeConfig';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata = {
    title: 'Peacore - Transformamos os Desafios do Seu Negócio com Tecnologia',
    description: 'A Peacore é sua Parceira Estratégica em tecnologia e inteligência artificial. Criamos Sistemas Customizados, Fazemos Automações e desenvolvemos soluções inovadoras com IA e Ciência de Dados.',
    keywords: ['consultoria tecnologia', 'inteligência artificial', 'automação de processos', 'sistemas customizados', 'ciência de dados', 'transformação digital', 'soluções em IA', 'desenvolvimento de software'],
    authors: [{ name: 'Peacore' }],
    creator: 'Peacore',
    publisher: 'Peacore',
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
            { url: '/images/logo_transparente.png', type: 'image/png', sizes: 'any' }
        ],
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon.png',
    },
    metadataBase: new URL('https://peacore.com.br'),
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://peacore.com.br',
        title: 'Peacore - Transformamos os Desafios do Seu Negócio com Tecnologia',
        description: 'Consultoria de Alta Performance em tecnologia e inteligência artificial. Criamos soluções inovadoras com comunicação clara, focada no seu resultado final.',
        siteName: 'Peacore',
        images: [
            {
                url: '/images/peacore_transparente.png',
                width: 1200,
                height: 630,
                alt: 'Peacore - Tecnologia e Inteligência Artificial',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Peacore - Transformamos os Desafios do Seu Negócio com Tecnologia',
        description: 'Consultoria de Alta Performance em tecnologia e inteligência artificial.',
        images: ['/images/peacore_transparente.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
        <body className={inter.className}>
            <AntdRegistry>
                <ConfigProvider theme={theme}>
                    <App>
                        {children}
                    </App>
                </ConfigProvider>
            </AntdRegistry>
        </body>
    </html>
);

export default RootLayout;
