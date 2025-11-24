'use client';

import React from 'react';
import { Typography, Steps, Card } from 'antd';
import { motion } from 'framer-motion';
import { SafetyCertificateOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Process = () => {
    return (
        <section id="process" style={{ padding: '100px 24px', background: '#F9FAFB' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <Title level={2} style={{ color: '#1C30AF', marginBottom: '16px' }}>Como Trabalhamos</Title>
                    <Paragraph style={{ fontSize: '18px', color: '#595959' }}>
                        Um processo estruturado para garantir transparência e resultados.
                    </Paragraph>
                </motion.div>

                <div className="desktop-timeline" style={{ marginBottom: '60px' }}>
                    <Steps
                        current={-1}
                        items={[
                            {
                                title: 'Escuta Ativa',
                                description: 'Diagnóstico profundo das dores e objetivos.',
                            },
                            {
                                title: 'Design da Solução',
                                description: 'Proposta estratégica com escopo e investimento.',
                            },
                            {
                                title: 'Contrato e Flexibilidade',
                                description: 'Formalização com opções de pagamento flexíveis.',
                            },
                            {
                                title: 'Execução e Validação',
                                description: 'Desenvolvimento ágil com entregas contínuas.',
                            },
                        ]}
                    />
                </div>

                {/* Mobile View - Vertical Cards */}
                <div className="mobile-timeline" style={{ display: 'none', flexDirection: 'column', gap: '24px' }}>
                    {[
                        { title: '1. Escuta Ativa', desc: 'Diagnóstico profundo das dores e objetivos.' },
                        { title: '2. Design da Solução', desc: 'Proposta estratégica com escopo e investimento.' },
                        { title: '3. Contrato e Flexibilidade', desc: 'Formalização com opções de pagamento flexíveis.' },
                        { title: '4. Execução e Validação', desc: 'Desenvolvimento ágil com entregas contínuas.' }
                    ].map((step, idx) => (
                        <Card key={idx} style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                            <Title level={5} style={{ color: '#1C30AF' }}>{step.title}</Title>
                            <Text style={{ color: '#595959' }}>{step.desc}</Text>
                        </Card>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginTop: '60px' }}
                >
                    <Card
                        style={{
                            background: '#E6F7FF',
                            border: '1px solid #91D5FF',
                            borderRadius: '12px',
                            textAlign: 'center'
                        }}
                    >
                        <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#007AFF', marginBottom: '16px' }} />
                        <Title level={4} style={{ color: '#0050B3', marginBottom: '8px' }}>Nota de Confiança</Title>
                        <Paragraph style={{ color: '#003A8C', marginBottom: 0, maxWidth: '800px', margin: '0 auto' }}>
                            Garantimos total sigilo e transparência em todas as etapas do projeto, com a formalização de Acordos de Confidencialidade (NDA) antes do início de qualquer discussão detalhada.
                        </Paragraph>
                    </Card>
                </motion.div>

                <style jsx global>{`
          @media (max-width: 768px) {
            .desktop-timeline {
              display: none !important;
            }
            .mobile-timeline {
              display: flex !important;
            }
          }
          .ant-steps-item-title {
            font-family: var(--font-poppins);
            font-weight: 600 !important;
            color: #1C30AF !important;
          }
          .ant-steps-item-description {
            font-family: var(--font-inter);
            color: #595959 !important;
            max-width: 200px;
          }
        `}</style>
            </div>
        </section>
    );
};

export default Process;
