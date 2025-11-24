'use client';

import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import {
    RocketOutlined,
    CodeOutlined,
    SyncOutlined,
    LineChartOutlined,
    TeamOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const pillars = [
    {
        title: 'Consultoria Estratégica',
        description: 'Analisamos a fundo as dores e traçamos o plano de ação. Apoiamos suas decisões estratégicas com foco na arquitetura ideal.',
        icon: <RocketOutlined style={{ fontSize: '32px', color: '#007AFF' }} />,
    },
    {
        title: 'Sistemas Customizados',
        description: 'Criamos seu produto do zero: sistemas internos, aplicativos e plataformas digitais. Soluções feitas sob medida.',
        icon: <CodeOutlined style={{ fontSize: '32px', color: '#007AFF' }} />,
    },
    {
        title: 'Automação de Processos',
        description: 'Transformamos tarefas manuais e repetitivas em fluxos automatizados. Ganhos em eficiência e redução de custos.',
        icon: <SyncOutlined style={{ fontSize: '32px', color: '#007AFF' }} />,
    },
    {
        title: 'IA & Análise de Dados',
        description: 'Transformamos seus dados brutos em decisões inteligentes. Implementação de IA para insights preditivos.',
        icon: <LineChartOutlined style={{ fontSize: '32px', color: '#007AFF' }} />,
    },
    {
        title: 'Parceria Estratégica',
        description: 'Para startups e projetos de alto potencial. A Peacore investe seu know-how em tecnologia em troca de participação.',
        icon: <TeamOutlined style={{ fontSize: '32px', color: '#007AFF' }} />,
        highlight: true,
    },
];

const Pillars = () => {
    return (
        <section id="solutions" style={{ padding: '100px 24px', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <Title level={2} style={{ color: '#1C30AF', marginBottom: '16px' }}>Nossos Pilares de Solução</Title>
                    <Paragraph style={{ fontSize: '18px', color: '#595959', maxWidth: '700px', margin: '0 auto' }}>
                        Tecnologia de ponta aplicada para resolver problemas reais e escalar o seu negócio.
                    </Paragraph>
                </motion.div>

                <Row gutter={[24, 24]} justify="center">
                    {pillars.map((pillar, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card
                                    variant="borderless"
                                    style={{
                                        height: '100%',
                                        borderRadius: '16px',
                                        boxShadow: pillar.highlight
                                            ? '0 10px 30px rgba(0, 122, 255, 0.15)'
                                            : '0 4px 20px rgba(0, 0, 0, 0.05)',
                                        border: pillar.highlight ? '1px solid #007AFF' : '1px solid #f0f0f0',
                                    }}
                                    styles={{ body: { padding: '24px', textAlign: 'center' } }}
                                >
                                    <div style={{ marginBottom: '24px' }}>
                                        {pillar.icon}
                                    </div>
                                    <Title level={4} style={{ color: '#1C30AF', marginBottom: '16px' }}>
                                        {pillar.title}
                                    </Title>
                                    <Paragraph style={{ color: '#595959', fontSize: '15px', lineHeight: 1.6 }}>
                                        {pillar.description}
                                    </Paragraph>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Pillars;
