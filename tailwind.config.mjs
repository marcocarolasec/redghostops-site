/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#0b0b0d',
        'paper-raised': '#111114',
        ink: '#ece9e3',
        soft: '#b9b5ad',
        muted: '#8a8780',
        rule: '#26262b',
        // Severity, not decoration. See global.css.
        critical: '#dc2626',
        'critical-deep': '#991b1b',
        'critical-text': '#ef4444',
        high: '#ea8c3a',
      },
      fontFamily: {
        // One family for everything a person reads; mono for machine output.
        sans: ['Bricolage Grotesque', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Modular scale, 1.25 from a 17px base.
        'step--1': ['0.85rem', { lineHeight: '1.5' }],
        'step-0': ['1.0625rem', { lineHeight: '1.55' }],
        'step-1': ['1.33rem', { lineHeight: '1.45' }],
        'step-2': ['1.66rem', { lineHeight: '1.25' }],
        'step-3': ['2.07rem', { lineHeight: '1.1' }],
        'step-4': ['2.59rem', { lineHeight: '1.02' }],
        'step-5': ['3.24rem', { lineHeight: '0.98' }],
        'step-6': ['4.6rem', { lineHeight: '0.92' }],
        'step-7': ['5.8rem', { lineHeight: '0.9' }],
      },
      maxWidth: {
        prose: '62ch',
        'prose-wide': '74ch',
      },
    },
  },
  plugins: [],
};
