import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-primary': '#222831',
        'custom-gray-secondary': '#393E46',
        'custom-yellow': '#FFD369',
        'custom-white': '#EEEEEE'
      }
    }
  },
  plugins: [],
};
export default config;
