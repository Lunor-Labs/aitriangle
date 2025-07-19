// Centralized color system for easy maintenance
export const colors = {
  // Primary brand colors - White + Teal + Navy
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14B8A6', // Primary Teal
    600: '#0d9488',
    700: '#0F766E', // Accent Teal
    800: '#115e59',
    900: '#134e4a',
  },
  
  // Navy for text and dark elements
  navy: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0F172A', // Dark Navy
  },
  
  // Secondary colors (keeping some variety)
  secondary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  
  // Accent colors
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  
  // Success colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // WhatsApp brand color
  whatsapp: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14B8A6', // Using primary teal
    600: '#0d9488',
    700: '#0F766E', // Using accent teal
    800: '#115e59',
    900: '#134e4a',
  },
  
  // Neutral colors (using navy tones)
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0F172A',
  }
};

// CSS custom properties for dynamic theming
export const cssVariables = `
  :root {
    --color-primary: ${colors.primary[500]};
    --color-primary-hover: ${colors.primary[700]};
    --color-navy: ${colors.navy[900]};
    --color-navy-light: ${colors.navy[700]};
    --color-white: #ffffff;
    
    --color-primary-50: ${colors.primary[50]};
    --color-primary-100: ${colors.primary[100]};
    --color-primary-200: ${colors.primary[200]};
    --color-primary-300: ${colors.primary[300]};
    --color-primary-400: ${colors.primary[400]};
    --color-primary-500: ${colors.primary[500]};
    --color-primary-600: ${colors.primary[600]};
    --color-primary-700: ${colors.primary[700]};
    --color-primary-800: ${colors.primary[800]};
    --color-primary-900: ${colors.primary[900]};
    
    --color-navy-50: ${colors.navy[50]};
    --color-navy-100: ${colors.navy[100]};
    --color-navy-200: ${colors.navy[200]};
    --color-navy-300: ${colors.navy[300]};
    --color-navy-400: ${colors.navy[400]};
    --color-navy-500: ${colors.navy[500]};
    --color-navy-600: ${colors.navy[600]};
    --color-navy-700: ${colors.navy[700]};
    --color-navy-800: ${colors.navy[800]};
    --color-navy-900: ${colors.navy[900]};
    
    --color-whatsapp: ${colors.whatsapp[500]};
    --color-whatsapp-hover: ${colors.whatsapp[700]};
  }
`;