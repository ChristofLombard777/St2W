import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: "#022248",
            900: "#091E39",
            800: "#0B1E38"
          },
          gold: {
            800: "#8B7A42",
            700: "#B09448",
            600: "#D4AF5A",
            500: "#E8C96A",
            400: "#F5DC88",
          },
          mist: {
            50: "#F6F8FB",
            100: "#EEF2F7"
          },
          slate: {
            500: "#5B6B7C"
          },
          line: "#D9E1EC",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(180deg, #022248 0%, #091E39 55%, #07172C 100%)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 34, 72, 0.10)",
        glow: "0 0 28px rgba(212,175,90,0.55), 0 0 60px rgba(212,175,90,0.22)",
        "glow-sm": "0 0 14px rgba(212,175,90,0.45)",
        "glow-lg": "0 0 40px rgba(212,175,90,0.6), 0 0 80px rgba(212,175,90,0.25)",
      },
      borderRadius: {
        xl2: "18px",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gold-shine': 'goldShine 2.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldShine: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
