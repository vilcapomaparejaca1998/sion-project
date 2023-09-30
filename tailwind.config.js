/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-customize': '#3a4861',
        'blue-light-customize': '#B0C3E7',
        'main-color': '#fffbeb',
        'tittle-color': '#60a5fa',
        'form': '#f9fafb',
        'input': '#818cf8',
        'btn-submit': '#6366f1',
        'btn-submit-hover': '#5b21b6',
        'white-color': '#fff',
        'btn-edit': '#3b82f6',
        'btn-delete': '#f43f5e'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animated')
  ],
}

