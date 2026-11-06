/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f5f1',
        card: '#ffffff',
        brand: {
          dark: '#142116',
          forest: '#1f3422',
          pine: '#2c4a30',
        },
        lime: {
          accent: '#c8f338',
          hover: '#b5e024',
          subtle: '#f4fce0',
        },
        ink: {
          900: '#111813',
          800: '#232b24',
          700: '#3d473e',
          500: '#647065',
          400: '#8d998e',
          200: '#d7ded8',
          100: '#edf2ed',
        }
      },
      fontFamily: {
        sans: ['"General Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(17, 24, 19, 0.06), 0 2px 6px -1px rgba(17, 24, 19, 0.03)',
        'float': '0 20px 40px -15px rgba(17, 24, 19, 0.15)',
      }
    },
  },
  plugins: [],
};
