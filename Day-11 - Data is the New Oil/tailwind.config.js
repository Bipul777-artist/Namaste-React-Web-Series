/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow : {
        '3xl' :  '0 10px 10px 5px',
        'custom-inset': 'inset 20px 30px 12px rgba(0, 0, 0, 0.9) , inset -20px -20px 12px rgba(0, 0, 0, 0.9)' ,
      },
    },
  },
  plugins: [],
}

