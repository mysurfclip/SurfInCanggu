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
        primary: {
          forest: '#2c4d48',
          'forest-hover': '#3d5f5a',
        },
        accent: {
          orange: '#e49355',
        },
        neutral: {
          'cream': '#fafaf8',
          'text-primary': '#2c4d48',
          'text-secondary': 'rgba(44, 77, 72, 0.6)',
          'text-tertiary': 'rgba(44, 77, 72, 0.4)',
          'border': 'rgba(44, 77, 72, 0.1)',
        }
      },
      fontFamily: {
        'costa-brisa': ['Costa Brisa', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
