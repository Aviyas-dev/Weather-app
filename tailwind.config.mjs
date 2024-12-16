import { Manrope } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor: "#F3F4F6",
        insideBackgroundColor: "#FFFFFF",
        nightBackgroundColor: "#0F141E",
        nightInsideColor: "#111827BF",

        
      },
     
      height: {
        'weatherHeight': '1200px',
        'weatherInsideHeight': '828px',
        'pictureHeight': '262.11px',
        

        
      },
      width: {
        'weatherWidth': '800px',
        'weatherInsideWidth': '414px',
        'pictureWidth': '262.11px',
        
      }
    },
  },
  plugins: [],
};
