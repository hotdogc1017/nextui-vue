import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./**/*.{js,ts,vue}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { height: 0, opacity: 0 },
          to: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
