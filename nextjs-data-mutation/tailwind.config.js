/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // 파일들을 대상으로 Tailwind CSS가 적용될 수 있도록 설정
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
          "100%": { color: "#e9e9e9" },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
      },
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
