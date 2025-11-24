'use client';

import React from 'react';
import { Card, Typography, Row, Col, Tag } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const cases = [
    {
        title: 'Gestão de Produtos Indígenas',
        challenge: 'Criar um sistema robusto para o gerenciamento e rastreabilidade de produtos de comunidades indígenas, garantindo a organização, a sustentabilidade e o acesso ao mercado.',
        solution: 'Desenvolvimento de uma plataforma customizada que centraliza o cadastro, logística e monitoramento, assegurando a transparência e a valorização da produção.',
        tags: ['Sistemas', 'Impacto Social'],
    },
    {
        title: 'Automação Administrativa e Fluxo de Pagamento',
        challenge: 'Otimizar e dar segurança a um fluxo administrativo interno complexo, focado na gestão de pagamentos, que exigia muita intervenção manual e gerava lentidão.',
        solution: 'Implementação de um sistema de automação administrativa que melhorou todo o fluxo de pagamento, aumentando a eficiência e a conformidade do processo.',
        tags: ['Automação', 'Eficiência'],
    },
    {
        title: 'Potencialização de Startups e Novos Negócios',
        challenge: 'Startups com grande potencial de negócio, mas com recursos limitados para desenvolver a infraestrutura técnica e o produto de forma escalável.',
        solution: 'Atuação como braço tecnológico estratégico, construindo a infraestrutura, o código e o produto (MVP ou 1.0), enquanto a startup mantém o foco no core business e no branding.',
        tags: ['Startups', 'Tech Partner'],
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" style={{ padding: '100px 24px', background: '#F8F9FA' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <Title level={2} style={{
                        color: '#1C30AF',
                        marginBottom: '16px',
                        fontSize: '2.5rem'
                    }}>
                        Nossa Experiência
                    </Title>
                    <Paragraph style={{ fontSize: '18px', color: '#595959', maxWidth: '600px', margin: '0 auto' }}>
                        Transformamos desafios complexos em soluções digitais de alto impacto.
                    </Paragraph>
                </motion.div>

                <Row gutter={[32, 32]} justify="center">
                    {cases.map((item, index) => (
                        <Col xs={24} md={12} lg={8} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                style={{ height: '100%', display: 'flex' }}
                            >
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '32px 24px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {/* Decorative Gradient Line */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #1C30AF 0%, #007AFF 100%)'
                                    }} />

                                    <Title level={4} style={{
                                        color: '#1C30AF',
                                        marginBottom: '24px',
                                        fontSize: '1.25rem',
                                        lineHeight: 1.4,
                                        minHeight: '56px'
                                    }}>
                                        {item.title}
                                    </Title>

                                    <div style={{ marginBottom: '20px', flex: 1 }}>
                                        <div style={{ marginBottom: '16px' }}>
                                            <span style={{
                                                display: 'block',
                                                fontSize: '12px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                color: '#8C8C8C',
                                                marginBottom: '4px',
                                                fontWeight: 600
                                            }}>
                                                Desafio
                                            </span>
                                            <Paragraph style={{ fontSize: '14px', color: '#262626', margin: 0 }}>
                                                {item.challenge}
                                            </Paragraph>
                                        </div>

                                        <div>
                                            <span style={{
                                                display: 'block',
                                                fontSize: '12px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                color: '#1C30AF',
                                                marginBottom: '4px',
                                                fontWeight: 600
                                            }}>
                                                Solução
                                            </span>
                                            <Paragraph style={{ fontSize: '14px', color: '#595959', margin: 0 }}>
                                                {item.solution}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div style={{
                                        paddingTop: '20px',
                                        borderTop: '1px solid #F0F0F0',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    }}>
                                        {item.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '12px',
                                                color: '#1C30AF',
                                                background: 'rgba(28, 48, 175, 0.05)',
                                                padding: '4px 12px',
                                                borderRadius: '100px',
                                                fontWeight: 500
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Portfolio;
