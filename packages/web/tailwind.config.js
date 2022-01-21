const { ScalarLeafsRule } = require("graphql");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-[#0077B5]',
    'after:bg-[#0077B5]',
    "after:content-['dm me on linkedin']",
    'text-[brown]',
    'text-[gray]',
    'text-[orange]',
    'text-[yellow]',
    'text-[blue]',
    'text-[purple]',
    'text-[pink]',
    'text-[red]',
    'text-[green]',
  ],
  theme: {
    extend: {
      colors: {
        'pink-0': '#FEECE9',
        'pink-1': '#FF5781',
      },
      fontFamily: {
        "sans": ['"Nunito Sans"', 'sans-serif'],
        "round": ['"M PLUS Rounded 1c"', 'sans-serif'],
        "poppin": ['"Poppins"', 'sans-serif']
      },
      keyframes: {
        pfp: {
          "0%": {
            transform: 'scale(0.8) translateX(50%)'
          },
          "50%" : {
            transform: 'scale(1.1) translateX(50%)'
          },
          "75%" : {
            transform: 'scale(1) translateX(-10%)'
          },
          "100%": {
            transform: 'scale(1) translateX(0%)'
          }
        },
        profileText: {
          "0%": {
            transform: 'scale(0) translateX(-70%)',
            opacity: 0
          },
          "50%" : {
            transform: 'scale(1) translateX(-70%)',
            opacity: 0
          },
          "75%": {
            transform: 'scale(1) translateX(10%)',
            opacity: 1

          },
          "100%": {
            transform: 'scale(1) translateX(0%)',
            opacity: 1

          }
        },
      },
      animation: {
        "pfp": "pfp 3s ease-in-out forwards",
        "profileText": "profileText 3s ease-in-out forwards",
      }
    },
  },
  plugins: [],
}
