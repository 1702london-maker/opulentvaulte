import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        ice: '#EAF4FB',
        'ice-deep': '#D4EAF6',
        sapphire: '#1B6CA8',
        'sapphire-lt': '#2E80BE',
        'sapphire-dk': '#145588',
        ink: '#1A2733',
        'ink-mid': '#3A5068',
        'ink-soft': '#6B87A0',
        'ink-mute': '#9FB5C7',
        border: '#C8DFF0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
      maxWidth: {
        container: '1360px',
      },
    },
  },
  plugins: [],
}

export default config
