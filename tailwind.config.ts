import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    /* =========================
       BREAKPOINT SYSTEM
    ========================= */
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px", // main design breakpoint
    },

    /* =========================
       CONTAINER SYSTEM
    ========================= */
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        md: "60px",
        "2xl": "120px",
      },
    },

    extend: {
      /* =========================
         COLORS
      ========================= */
      colors: {
        primary: {
          forest: "#2c4d48",
          forestHover: "#3d5f5a",
        },
        accent: {
          orange: "#e49355",
        },
        neutral: {
          cream: "#EEE8DA",
          textPrimary: "#2c4d48",
          textSecondary: "rgba(44, 77, 72, 0.6)",
          textTertiary: "rgba(44, 77, 72, 0.4)",
          border: "rgba(44, 77, 72, 0.1)",
        },
      },

      /* =========================
         FONT FAMILY
      ========================= */
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Costa Brisa Sans", "sans-serif"],
        beckman: ["Beckman", "sans-serif"],
      },

      /* =========================
         FONT WEIGHTS
      ========================= */
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      /* =========================
         TYPOGRAPHY SCALE
      ========================= */

      fontSize: {
        /* HERO DISPLAY */
        hero: [
          "clamp(42px, 6vw, 72px)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        "hero-xl": [
          "clamp(72px, 8vw, 112px)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],

        /* HEADINGS */
        h1: [
          "clamp(28px, 4vw, 48px)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
          },
        ],

        h2: [
          "clamp(24px, 3vw, 36px)",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],

        h3: [
          "20px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
          },
        ],

        h4: [
          "18px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
          },
        ],

        /* BODY */
        bodyLg: [
          "clamp(16px, 1.2vw, 20px)",
          { lineHeight: "1.6" },
        ],

        bodyBase: ["16px", { lineHeight: "1.6" }],
        bodySm: ["14px", { lineHeight: "1.5" }],
        caption: ["12px", { lineHeight: "1.4" }],

        label: [
          "11px",
          {
            lineHeight: "1.4",
            letterSpacing: "0.2em",
          },
        ],
      },

      /* =========================
         SPACING SYSTEM
      ========================= */
      spacing: {
        sectionYMobile: "60px",
        sectionYDesktop: "120px",
        containerMobile: "24px",
        containerTablet: "60px",
        containerDesktop: "120px",
      },

      /* =========================
         MAX WIDTH
      ========================= */
      maxWidth: {
        content: "1440px",
      },

      /* =========================
         SHADOWS
      ========================= */
      boxShadow: {
        soft: "0 10px 40px rgba(44, 77, 72, 0.08)",
        premium: "0 40px 120px rgba(0,0,0,0.5)",
      },

      /* =========================
         BORDER RADIUS
      ========================= */
      borderRadius: {
        xl2: "20px",
      },
    },
  },

  plugins: [],
};

export default config;
