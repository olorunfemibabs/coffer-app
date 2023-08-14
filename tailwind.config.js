/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        bigDesktop: { max: "3200px" }, //Big desktop
        semiBigDesktop: { max: "1920px" },
        bigScreen:{max: "1539"},
        bSemiBig: { max: "1440px" }, //1440
        bSemismall: { max: "1366px" }, //
        lgDesktop: { max: "1280px" }, //large desktop
        smDesktop: { max: "1024px" }, // small desktop
        smDesk: { max: "917px" }, // small desktop
        tabletAir: { max: "824px" }, // big tablet
        tablet: { max: "770px" },
        surfDuo:{max:"540"},
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible:true }),
  ],
}
