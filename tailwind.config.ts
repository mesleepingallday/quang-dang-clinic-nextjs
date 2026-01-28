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
        green: {
          50: "#E8F5EF",
          100: "#C5E8D5",
          200: "#9DD9BB",
          300: "#5CB88F",
          400: "#2F9A6C",
          500: "#0D7351", // Primary brand color from logo
          600: "#0A5C41",
          700: "#074530",
        },
        nude: {
          50: "#FDFCF8",
          100: "#F7F5F0",
          200: "#EBE6DC",
          300: "#DFD8C8",
          800: "#5C5548",
        },
        primary: "#0D7351",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
