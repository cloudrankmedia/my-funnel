import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#222E50",
          light: "#2d3d69",
          dark: "#1a2340",
        },
        brand: {
          orange: "#F58D39",
          "orange-light": "#faa96a",
          "orange-pale": "#fef3ea",
        },
      },
      fontFamily: {
        // Paragraph font — Inter from Google Fonts
        sans: ["Inter", "sans-serif"],
        // Heading font — Helvetica system stack, zero load time
        display: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
