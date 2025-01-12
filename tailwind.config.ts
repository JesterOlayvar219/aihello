import type { Config } from "tailwindcss";

export default {
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
        sidebar: "#161A23",
        divider: "#2D2F39",
        sidebar_li: "#8B8D91",
        sidebar_item_active: "#2D2F39"
      },
      width: {
        sidebar:'273px',
        divider: '221.81px'
      },
      height: {
        divider: "2.13px",
      },
      padding: {
        sidebar: "25.59px",
        sidebar_li_x: "10.66px",
      },
      margin: {
        sidebar: "25.9px",
        sidebar_li: "12.8px",
        menu: "8.53px"
      },
      fontSize: {
        sidebar_li: "14.93px",
        sidebar_menu: "10.66px"
      },
      fontWeight: {
        medium: "500",
      }
    },
  },
  plugins: [],
} satisfies Config;
