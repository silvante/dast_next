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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        base: "2400px"
      },
      padding: {
        base: "0px 50px"
      },
      backgroundColor: {
        base_red: "#F5333F"
      },
      textColor: {
        base_red: "#F5333F"
      }
    },
  },
  plugins: [],
};
export default config;
