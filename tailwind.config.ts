import type { Config } from "tailwindcss";

import lineclamp from "@tailwindcss/line-clamp";
import scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [lineclamp, scrollbar],
} satisfies Config;
