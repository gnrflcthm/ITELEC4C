/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        lightGradient: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(255,255,255,0.3) 100%)",
        darkGradient: "radial-gradient(circle, rgba(255,255,255,0) 0, rgba(0,0,0,0.3) 100%)",
      }
    },
  },
  plugins: [],
}

