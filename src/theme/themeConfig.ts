import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#007AFF', // Electric Blue
    colorInfo: '#007AFF',
    colorTextBase: '#1C30AF', // Deep Blue (Branding) - used for text
    colorBgBase: '#FFFFFF', // White
    fontFamily: 'var(--font-inter)',
  },
  components: {
    Button: {
      colorPrimary: '#007AFF',
      algorithm: true, // Enable algorithm for derived colors
    },
    Typography: {
      fontFamilyCode: 'var(--font-poppins)', // Use Poppins for Titles
      colorTextHeading: '#1C30AF',
    },
    Layout: {
      bodyBg: '#FFFFFF',
      headerBg: 'rgba(255, 255, 255, 0.8)',
    }
  },
};

export default theme;
