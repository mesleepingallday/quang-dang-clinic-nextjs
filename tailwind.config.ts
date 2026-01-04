import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#F9F1D8",
          200: "#F0E3B6",
          300: "#E6D094",
          400: "#DCC376",
          500: "#CBA135",
          600: "#A68226",
          700: "#83651C",
        },
        nude: {
          50: "#FDFCF8",
          100: "#F7F5F0",
          200: "#EBE6DC",
          300: "#DFD8C8",
          800: "#5C5548",
        },
        primary: "#CBA135",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
