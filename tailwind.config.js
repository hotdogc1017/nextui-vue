import { nextui } from '@nextui-org/theme'
// const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './dev/src/**/*.{js,ts,jsx,tsx,vue}',
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
