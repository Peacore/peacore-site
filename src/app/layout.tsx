import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import { ConfigProvider } from 'antd';
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
    title: 'Peacore',
    description: 'Transformamos os Desafios do Seu Negócio com Tecnologia.',
    icons: {
        icon: '/images/logo_transparente.png',
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
        <body className={inter.className}>
            <AntdRegistry>
                <ConfigProvider theme={theme}>
                    {children}
                </ConfigProvider>
            </AntdRegistry>
        </body>
    </html>
);

export default RootLayout;
