import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: '#F8F5F2',
        rose: '#D68D8D',
        gold: '#C9A86A',
        charcoal: '#2B2B2B'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(214, 141, 141, 0.2)'
      },
      borderRadius: {
        xl: '20px',
        lg: '16px',
        md: '12px'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

export default config;
