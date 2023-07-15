/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{js, jsx, ts, tsx}'
 ],
 theme: {
  extend: {
    keyframes: {
      glideInRight: {
        '0%': { transform: 'translateX(400%)'},
        '100%': { transform: 'translateX(0)'},
      },
      glideInLeft: {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0)' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      'glide-in-right': 'glideInRight 01s ease-out',
      'glide-in-left': 'glideInLeft 01s ease-out',
      'fade-in': 'fadeIn 0.5s ease-in',

    },
  },
},
  plugins: [],
}

