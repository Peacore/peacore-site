'use client';

import React from 'react';
import { Typography, Form, Input, Button, Row, Col, message } from 'antd';
import { motion } from 'framer-motion';
import { MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
    const [form] = Form.useForm();

    const [loading, setLoading] = React.useState(false);

    const onFinish = async (values: { name: string; email: string; phone: string; message: string }) => {
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                message.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.resetFields();
            } else {
                message.error(data.error || 'Erro ao enviar mensagem. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            message.error('Erro ao enviar mensagem. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" style={{ padding: '100px 24px', background: '#1C30AF', color: '#FFFFFF' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Row gutter={[64, 48]} align="middle">
                    <Col xs={24} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Title level={2} style={{ color: '#FFFFFF', marginBottom: '24px' }}>
                                Pronto para Transformar Seu Negócio?
                            </Title>
                            <Paragraph style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '40px' }}>
                                Entre em contato com nossos especialistas. Descreva seu desafio e comece a traçar o futuro tecnológico da sua empresa hoje mesmo.
                            </Paragraph>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <MailOutlined style={{ fontSize: '24px', color: '#007AFF', marginRight: '16px' }} />
                                    <span style={{ fontSize: '18px', color: '#FFFFFF' }}>contato@peacore.com.br</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <PhoneOutlined style={{ fontSize: '24px', color: '#007AFF', marginRight: '16px' }} />
                                    <span style={{ fontSize: '18px', color: '#FFFFFF' }}>+55 11 98553-1516</span>
                                </div>
                            </div>
                        </motion.div>
                    </Col>

                    <Col xs={24} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px' }}>
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={onFinish}
                                    size="large"
                                >
                                    <Form.Item
                                        name="name"
                                        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
                                    >
                                        <Input placeholder="Nome Completo" />
                                    </Form.Item>

                                    <Form.Item
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Por favor, insira seu e-mail!' },
                                            { type: 'email', message: 'E-mail inválido!' }
                                        ]}
                                    >
                                        <Input placeholder="E-mail Corporativo" />
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        rules={[{ required: true, message: 'Por favor, insira seu telefone!' }]}
                                    >
                                        <Input placeholder="Telefone / WhatsApp" />
                                    </Form.Item>

                                    <Form.Item
                                        name="message"
                                        rules={[{ required: true, message: 'Por favor, descreva seu desafio!' }]}
                                    >
                                        <TextArea rows={4} placeholder="Como podemos ajudar?" />
                                    </Form.Item>

                                    <Form.Item style={{ marginBottom: 0 }}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            size="large"
                                            icon={<SendOutlined />}
                                            loading={loading}
                                            style={{ height: '48px', fontWeight: 600 }}
                                        >
                                            Enviar Mensagem
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Contact;
