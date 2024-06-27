/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily: {
        'principal': ["Epilogue","sans-serif"]
      },
      backgroundImage: {
        'open-menu': "url('../imgs/icon-menu.svg')",
        'close-menu': "url('../imgs/icon-close-menu.svg')",
        'arrow-down': "url('../imgs/icon-arrow-down.svg')",
        'arrow-up': "url('../imgs/icon-arrow-up.svg')"
      },
      colors: {
        "Almost-white" : "hsl(0, 0%, 98%)",
        "Medium-gray": "hsl(0, 0%, 41%)",
        "Almost-black" : "hsl(0, 0%, 8%)"
      },
    },
  },
  plugins: [],
}

