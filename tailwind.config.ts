import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          forest: "#2c4d48",
          forestHover: "#3d5f5a",
        },
        accent: {
          orange: "#e49355",
        },
        neutral: {
          cream: "#fafaf8",
          textPrimary: "#2c4d48",
          textSecondary: "rgba(44, 77, 72, 0.6)",
          textTertiary: "rgba(44, 77, 72, 0.4)",
          border: "rgba(44, 77, 72, 0.1)",
        },
      },

      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        script: ["CostaBrisaScript", "serif"],
        sans: ["CostaBrisaSans", "sans-serif"],
        beckman: ["Beckman", "sans-serif"],
      },

      fontSize: {
        /* =========================
           HERO DISPLAY
        ========================= */
        hero: ["48px", {
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
        }],
        "hero-lg": ["96px", {
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
        }],

        /* =========================
           HEADINGS (BECKMAN)
        ========================= */
        h1: ["36px", {
          lineHeight: "1.1",
          letterSpacing: "-0.025em",
        }],
        "h1-lg": ["48px", {
          lineHeight: "1.1",
          letterSpacing: "-0.025em",
        }],

        h2: ["30px", {
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        }],
        "h2-lg": ["36px", {
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        }],

        h3: ["20px", {
          lineHeight: "1.4",
          letterSpacing: "-0.01em",
        }],

        h4: ["18px", {
          lineHeight: "1.4",
          letterSpacing: "-0.01em",
        }],

        /* =========================
           BODY (INTER)
        ========================= */
        bodyLg: ["18px", {
          lineHeight: "1.6",
        }],
        bodyLgDesktop: ["20px", {
          lineHeight: "1.6",
        }],

        bodyBase: ["16px", {
          lineHeight: "1.6",
        }],

        bodySm: ["14px", {
          lineHeight: "1.5",
        }],

        caption: ["12px", {
          lineHeight: "1.4",
        }],

        label: ["11px", {
          lineHeight: "1.4",
          letterSpacing: "0.2em",
        }],
      },


      boxShadow: {
        soft: "0 10px 40px rgba(44, 77, 72, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
