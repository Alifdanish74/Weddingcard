import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine", "cursive"]
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'main_bg_image': "url('./assets/background-card.jpg')",
          'main_bg_image_blur': "url('./assets/background-card-blur.jpg')",
          'card_bg_image':"url('./assets/card-bg.jpg')",
          'doa_bg_image':"url('./assets/bg-prayer.png')",

      },
    },
    
  },
  plugins: [],
};
export default config;
