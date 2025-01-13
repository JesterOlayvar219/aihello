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

        profile: "#F1F5F9",
        sidebar: "#161A23",
        divider: "#2D2F39",
        sidebar_li: "#8B8D91",
        sidebar_item_active: "#2D2F39",
        header_button: "#C5412B",
        header_filter: "#64748B",
        header_filter_border: "#E2E8F0",
        header_profile_name: "#212B36",
        header_profile_role: "#637381",
        data_grid_link: "#B6BFCC",
        profile_tab_inactive: "#64748B",
        dark_blue_medium: "#101828",
        light_blue_medium: "#4266E9",
        light_blue_medium_2: "#4266E9",
        light_brown_medium: "#8C564B",
        light_brown_medium_2: "#D2691F",
        light_gray_medium: "#667085",
        light_gray_medium_2: "#EAECF0",
        light_gray_medium_3: "#DFE5F9",
        light_gray_medium_4: "#7F7F7F",
        light_green_medium_2: "#07BEAA",
        light_green_medium_3: "#58C4FF",
        light_green_medium_4: "#005AFF",
        light_green_medium_5: "#BCBD21",
        light_green_medium_6: "#17BECF",
        light_green_medium_7: "#558564",
        light_pink_medium: "#E377C2",
        light_pink_medium_2: "#FFB6C2",
        light_purple_medium: "#9669BE",
        light_yellow_medium: "#FFC246",
        light_yellow_medium_2: "#FF7F0F",
        light_yellow_medium_3: "#FFD700",
      },
      width: {
        sidebar:'273px',
        divider: '221.81px'
      },
      height: {
        divider: "2.13px",
        header: "93px"
      },
      padding: {
        sidebar: "25.59px",
        sidebar_li_x: "10.66px",
        header_help_btn_y: "14.06px",
        header_help_btn_x: "27px",
        header_filter_x: "10px",
        header_filter_y: "11px"
      },
      margin: {
        sidebar: "25.9px",
        sidebar_li: "12.8px",
        menu: "8.53px"
      },
      fontSize: {
        sidebar_li: "14.93px",
        sidebar_menu: "10.66px",
        header_help_btn: "14.25px",
        header_filter: "14.11px",
        header_profile_name: "14.1px",
        header_profile_role: "12.08px",
        data_grid_link: "17.64px",
        profile_tab:"16.25px",
        profile_tab_index: "10.16px"
      },
      fontWeight: {
        medium: "500",
        header: "600"
      }
    },
  },
  plugins: [],
} satisfies Config;
