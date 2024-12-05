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
        primary: "#0B132B",
        secondary: "#1C2541",
        tertiary: "#3A506B",
        quaternary: "#5BC0BE",
        light: "#FFFFFF",
        dark: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
