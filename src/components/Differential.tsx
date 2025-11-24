'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { CheckCircleFilled } from '@ant-design/icons';
import Image from 'next/image';

const { Title } = Typography;

const differentials = [
    {
        title: 'Versatilidade Comprovada',
        description: 'Atendemos com a mesma excelência desde Instituições Públicas e ONGs até Empresas de Grande Porte e Novos Negócios.',
    },
    {
        title: 'Time de Alta Performance',
        description: 'Talentos formados por especialistas e ligas acadêmicas renomadas como a PUC Tech da PUC-SP, garantindo rigor técnico.',
    },
    {
        title: 'Tradução da Complexidade',
        description: 'Eliminamos o jargão. Explicamos termos técnicos de forma flexível e aplicamos a tecnologia à lógica do seu negócio.',
    },
    {
        title: 'Inspiração Peacore',
        description: 'Nossa atuação reflete o pavão: visão estratégica para o futuro e a elegância da execução.',
    },
];

const Differential = () => {
    return (
        <section style={{ padding: '100px 24px', background: '#FFFFFF', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Row gutter={[64, 48]} align="middle">
                    <Col xs={24} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Title level={2} style={{ color: '#1C30AF', marginBottom: '32px' }}>
                                Excelência, Versatilidade e o Rigor Técnico da Peacore.
                            </Title>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {differentials.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <CheckCircleFilled style={{ fontSize: '24px', color: '#007AFF', marginTop: '4px', marginRight: '16px', flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontSize: '18px', fontWeight: 600, color: '#1C30AF', marginBottom: '4px' }}>{item.title}</div>
                                            <div style={{ fontSize: '16px', color: '#595959' }}>{item.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>

                    <Col xs={24} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <div style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                maxWidth: '500px',
                                height: 'auto'
                            }}>
                                <Image
                                    src="/images/1_visao_estrategica.jpg"
                                    alt="Visão Estratégica"
                                    width={500}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Differential;
