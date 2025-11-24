'use client';

import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 24px 60px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F2F5 100%)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(0,122,255,0.05) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div style={{ maxWidth: '1200px', width: '100%', zIndex: 1 }}>
                <Row gutter={[48, 48]} align="middle">
                    <Col xs={24} lg={14}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Title level={1} style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                color: '#1C30AF',
                                marginBottom: '24px',
                                lineHeight: 1.2
                            }}>
                                Transformamos os Desafios do Seu Negócio com Tecnologia.
                            </Title>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <Paragraph style={{
                                fontSize: '1.125rem',
                                color: '#595959',
                                marginBottom: '40px',
                                lineHeight: 1.8,
                                maxWidth: '600px'
                            }}>
                                A Peacore é sua Parceira Estratégica, somos uma Consultoria de Alta Performance em tecnologia e inteligência artificial! Criamos Sistemas Customizados, Fazemos Automações para os seus processos, criamos soluções inovadoras com Inteligência Artificial e Ciência de Dados. Entregamos soluções com comunicação clara, focada no seu resultado final.
                            </Paragraph>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <Button
                                type="primary"
                                size="large"
                                shape="round"
                                style={{
                                    height: '56px',
                                    padding: '0 40px',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    boxShadow: '0 8px 20px rgba(0, 122, 255, 0.3)'
                                }}
                                onClick={scrollToContact}
                            >
                                Fale com Nossos Especialistas
                            </Button>
                        </motion.div>
                    </Col>
                    <Col xs={24} lg={10} className="hide-on-mobile" style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{
                                width: '100%',
                                maxWidth: '800px',
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '-40px'
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: 'auto',
                            }}>
                                <Image
                                    src="/images/peacore_transparente.png"
                                    alt="Peacore Technology"
                                    width={650}
                                    height={650}
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Hero;
