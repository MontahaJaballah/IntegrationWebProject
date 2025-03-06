/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "competition-red": "#8B0000",
        "competition-yellow": {
          light: "#FFF2CC",
          border: "#F5D78E",
        },
        "custom-brown": "rgb(144, 74, 65)",
        "custom-yellow": "rgba(253, 225, 134, 1)",
        "custom-yellow-2": "rgba(253, 223, 134, 1)",
        'brand-primary': '#904A41',
        'brand-secondary': '#F9E1A3',
      },
      spacing: {
        "card-gap": "1.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        competition: "0.5rem",
      },
      fontSize: {
        "competition-title": [
          "2rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "700",
          },
        ],
        "card-title": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          },
        ],
      },
      fontFamily: {
        'display': ['Quicksand', 'sans-serif'],
        'body': ['Asap', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};