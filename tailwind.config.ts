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
        primary: {
          base: '#4B70F5',
          500: '#3661ff'
        },
        tertiary: {
          base: '#dafbff'
        }, 
        slate: {
          base: ''
        }
      },
       backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #0D92F4 40%, #4B70F5 70%)',
        'hero-background-image': 'url("/public/assets/hero-bg.png")'
      },
      screens: {
        xs: '516px'
      },
    },
  },
  plugins: [],
};
export default config;
