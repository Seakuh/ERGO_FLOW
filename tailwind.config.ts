import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F6F8FB',
          secondary: '#FFFFFF',
        },
        accent: {
          primary: '#4F8DF7',
          secondary: '#8ED1B2',
        },
        text: {
          primary: '#1E2430',
          secondary: '#6B7280',
        }
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(30, 36, 48, 0.07)',
        'card-hover': '0 6px 24px 0 rgba(30, 36, 48, 0.12)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
} satisfies Config
