'use client';

import React, { useState } from 'react';
import { Layout, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const { Header: AntHeader } = Layout;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollY } = useScroll();

    // Detect mobile viewport
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const menuItems = [
        { key: 'hero', label: 'Início', href: '#hero' },
        { key: 'solutions', label: 'Soluções', href: '#solutions' },
        { key: 'process', label: 'Processo', href: '#process' },
        { key: 'portfolio', label: 'Portfólio', href: '#portfolio' },
        { key: 'contact', label: 'Contato', href: '#contact' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <AntHeader
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 1000,
                width: '100%',
                padding: 0, // Remove padding from AntHeader, move to container
                transition: 'all 0.3s ease',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none',
                height: isScrolled ? '70px' : '90px',
            }}
        >
            <div className="header-container">
                {/* 1. Logo Section */}
                <div className="logo header-logo" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0, marginLeft: isMobile ? '0' : '0' }} onClick={() => scrollToSection('hero')}>
                    <Image src="/images/logo_transparente.png" alt="Peacore Logo" width={140} height={40} style={{ objectFit: 'contain' }} />
                </div>

                {/* 2. Centered Menu Section */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '32px' }}>
                    {menuItems.map((item) => (
                        <a
                            key={item.key}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                            style={{
                                color: '#1C30AF',
                                fontWeight: 500,
                                fontSize: '15px',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'color 0.2s',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#007AFF'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#1C30AF'}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* 3. Right Button Section */}
                <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        onClick={() => scrollToSection('#contact')}
                        style={{ fontWeight: 600 }}
                    >
                        Fale Conosco
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn">
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ fontSize: '24px', color: '#1C30AF' }} />}
                        onClick={() => setMobileMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {menuItems.map((item) => (
                        <a
                            key={item.key}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                            style={{
                                color: '#1C30AF',
                                fontWeight: 500,
                                fontSize: '18px',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        onClick={() => scrollToSection('#contact')}
                        style={{ fontWeight: 600, width: '100%' }}
                    >
                        Fale Conosco
                    </Button>
                </div>
            </Drawer>
        </AntHeader>
    );
};

export default Header;
