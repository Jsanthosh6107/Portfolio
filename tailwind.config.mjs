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
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#0d0d0d',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.x-margin': {
          marginLeft: '5%',
          marginRight: '5%',
          '@screen xl': { marginLeft: '10%', marginRight: '10%' },
          '@screen 2xl': { marginLeft: '15%', marginRight: '15%' },
        },
      });
    },
  ],
};
