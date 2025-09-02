/** @type {import('tailwindcss').Config} */

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  corePlugins: { preflight: true },
  plugins: [require("daisyui")],
};
