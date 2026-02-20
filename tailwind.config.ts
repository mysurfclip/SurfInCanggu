import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
      "2xl": "1440px",
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
          textSecondary: "rgba(44,77,72,0.6)",
          textTertiary: "rgba(44,77,72,0.4)",
          border: "rgba(44,77,72,0.1)",
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
         TYPOGRAPHY SCALE
      ========================= */
      fontSize: {
        hero: [
          "clamp(48px, 6vw, 96px)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        display: [
          "clamp(40px, 5vw, 72px)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        h1: [
          "clamp(32px, 4vw, 56px)",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],

        h2: [
          "clamp(24px, 3vw, 36px)",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.015em",
            fontWeight: "600",
          },
        ],

        h3: [
          "20px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],

        h4: [
          "18px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],

        bodyLg: [
          "clamp(18px, 1.2vw, 22px)",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],

        bodyBase: [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],

        bodySm: [
          "14px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],

        caption: [
          "12px",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],

        label: [
          "11px",
          {
            lineHeight: "1.4",
            letterSpacing: "0.2em",
            fontWeight: "500",
          },
        ],
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

  /* =========================
     GLOBAL SECTION SYSTEM
  ========================= */
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        /* Main section wrapper */
        ".section-wrap": {
          maxWidth: "1440px",
          marginLeft: "auto",
          marginRight: "auto",

          /* 375px — default mobile */
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "20px",
          paddingBottom: "20px",

          /* 640px — sm: padding Figma 35px kiri/kanan, 40px atas/bawah */
          "@screen sm": {
            paddingLeft: "35px",
            paddingRight: "35px",
            paddingTop: "40px",
            paddingBottom: "40px",
          },

          /* 768px — md */
          "@screen md": {
            paddingLeft: "35px",
            paddingRight: "35px",
            paddingTop: "40px",
            paddingBottom: "40px",
          },

          /* 1024px — lg */
          "@screen lg": {
            paddingLeft: "80px",
            paddingRight: "80px",
            paddingTop: "40px",
            paddingBottom: "40px",
          },

          /* 1280px — xl */
          "@screen xl": {
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "60px",
            paddingBottom: "60px",
          },

          /* 1440px — 2xl */
          "@screen 2xl": {
            paddingLeft: "120px",
            paddingRight: "120px",
            paddingTop: "60px",
            paddingBottom: "60px",
          },
        },
      });
    }),
  ],
};

export default config;