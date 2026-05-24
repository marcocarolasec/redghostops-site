/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'void': '#000000',
        'bone': '#f5f0e8',
        'blood': '#dc2626',
        'blood-dim': '#991b1b',
        'blood-bright': '#ef4444',
        'ash': '#1a1a1a',
        'ash-light': '#262626',
        'ash-lighter': '#404040',
        'ghost': '#737373',
        'ghost-light': '#a3a3a3',
        'phosphor': '#22c55e',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'ui-monospace', 'monospace'],
        'display': ['Space Mono', 'ui-monospace', 'monospace'],
        'sans': ['Inter Tight', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 4s linear infinite',
        'scan': 'scan 8s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
          '52%': { opacity: '0.85' },
          '54%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
