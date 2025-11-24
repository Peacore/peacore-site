'use client';

import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { LinkedinFilled, InstagramOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ background: '#101D6B', padding: '60px 24px 24px', color: '#FFFFFF' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Row gutter={[48, 48]}>
                    <Col xs={24} md={8}>
                        <div style={{ marginBottom: '24px' }}>
                            {/* White Logo for Footer if available, otherwise text or filter */}
                            <div style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>Peacore</div>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.65)', display: 'block', maxWidth: '300px' }}>
                                Consultoria de Alta Performance em tecnologia e inteligência artificial.
                            </Text>
                        </div>
                    </Col>

                    <Col xs={24} md={8}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Text strong style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '8px' }}>Navegação</Text>
                            <a onClick={() => scrollToSection('hero')} style={{ color: 'rgba(255, 255, 255, 0.85)', cursor: 'pointer' }}>Início</a>
                            <a onClick={() => scrollToSection('solutions')} style={{ color: 'rgba(255, 255, 255, 0.85)', cursor: 'pointer' }}>Soluções</a>
                            <a onClick={() => scrollToSection('process')} style={{ color: 'rgba(255, 255, 255, 0.85)', cursor: 'pointer' }}>Processo</a>
                            <a onClick={() => scrollToSection('portfolio')} style={{ color: 'rgba(255, 255, 255, 0.85)', cursor: 'pointer' }}>Portfólio</a>
                            <a onClick={() => scrollToSection('contact')} style={{ color: 'rgba(255, 255, 255, 0.85)', cursor: 'pointer' }}>Contato</a>
                        </div>
                    </Col>

                    <Col xs={24} md={8}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Text strong style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '8px' }}>Legal</Text>
                            <Link href="#" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Política de Privacidade</Link>
                            <Link href="#" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Termos de Uso</Link>

                            <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                                <LinkedinFilled style={{ fontSize: '24px', color: '#FFFFFF', cursor: 'pointer' }} />
                                <InstagramOutlined style={{ fontSize: '24px', color: '#FFFFFF', cursor: 'pointer' }} />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.15)', margin: '40px 0 24px' }} />

                <div style={{ textAlign: 'center' }}>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '14px' }}>
                        Copyright © 2025 Peacore. Todos os direitos reservados.
                    </Text>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
