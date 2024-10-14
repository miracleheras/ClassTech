/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: { min: "1441px" },
        laptopL: { max: "1440px", min: "1025px" },
        laptop: { max: "1024px", min: "769px" },
        tablet: { max: "768px", min: "426px" },
        mobile: { max: "425px" },
      },
    },
  },
  plugins: [],
};
