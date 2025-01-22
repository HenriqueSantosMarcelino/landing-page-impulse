/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe4119',
      },
      fontFamily: {
        tasaregular: ['tasa-regular', 'sans-serif'],
        tasasemibold: ['tasa-semibold', 'sans-serif'],
        fieldsregular: ['fields-regular', 'serif'],
        fieldssemibold: ['fields-semibold', 'serif'],
      },
      scale: {
        102: '1.02', //Escala para hovers
      },
    },
  },
  plugins: [],
};
