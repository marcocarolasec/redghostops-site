/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#0d0d0f',
        'paper-raised': '#16161a',
        ink: '#e8e6e1',
        muted: '#8b8a86',
        rule: '#2a2a2e',
        // Severity, not decoration. See global.css.
        critical: '#dc2626',
        'critical-deep': '#991b1b',
        'critical-text': '#ef4444',
        high: '#ea8c3a',
      },
      fontFamily: {
        // Two families, two jobs. Serif carries everything a person reads;
        // mono is reserved for machine output.
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Modular scale, 1.25 from a 17px base.
        'step--1': ['0.85rem', { lineHeight: '1.5' }],
        'step-0': ['1.0625rem', { lineHeight: '1.65' }],
        'step-1': ['1.33rem', { lineHeight: '1.5' }],
        'step-2': ['1.66rem', { lineHeight: '1.35' }],
        'step-3': ['2.07rem', { lineHeight: '1.2' }],
        'step-4': ['2.59rem', { lineHeight: '1.12' }],
        'step-5': ['3.24rem', { lineHeight: '1.05' }],
        'step-6': ['4.05rem', { lineHeight: '1.0' }],
      },
      maxWidth: {
        prose: '62ch',
        'prose-wide': '74ch',
      },
    },
  },
  plugins: [],
};
