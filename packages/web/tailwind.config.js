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
    'text-[#FFFFFFE6]',
    'text-[#979A9BF2]',
    'text-[#937264]',
    'text-[#FFA344]',
    'text-[#FFDC49]',
    'text-[#4DAB9A]',
    'text-[#529CCA]',
    'text-[#9A6DD7]',
    'text-[#E255A1]',
    'text-[#FF7369]',
    'bg-transparent',
    'bg-[#454B4E]',
    'bg-[#434040]',
    'bg-[#594A3A]',
    'bg-[#59563B]',
    'bg-[#354C4B]',
    'bg-[#364954]',
    'bg-[#443F57]',
    'bg-[#533B4C]',
    'bg-[#594141]',
  ],
  theme: {
    extend: {
      colors: {
        'pink-0': '#FEECE9',
        'pink-1': '#FF5781',
      },
      fontFamily: {
        "sans": ['"Nunito Sans"'],
        "round": ['"M PLUS Rounded 1c"'],
        "poppin": ['"Poppins"']
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
        swing: {
          "0%": {
            transform: 'translateX(-1px) rotate(45deg)',
          },
          "50%" : {
            transform: 'translateX(1px) rotate(45deg)',
          },
          "100%": {
            transform: 'translateX(-1px) rotate(45deg)',
          }
        },
      },
      animation: {
        "pfp": "pfp 3s ease-in-out forwards",
        "profileText": "profileText 3s ease-in-out forwards",
        "swing": "swing 1s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}
