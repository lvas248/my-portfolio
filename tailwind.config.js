/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{js, jsx, ts, tsx}'
 ],
 theme: {
  extend: {
    keyframes: {

      glideInRight: {
        '0%': { transform: 'translate(-100%)'},
        '100%': { transform: 'translateX(0)'},
      },
      glideInLeft: {
        '0%': { transform: 'translateX(-150%)' },
        '100%': { transform: 'translateX(0)' },
      },
      glideOutRight: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(150%)'},
      },
      glideOutLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-150%)' },
      },
      fadeIn: {
        '0%': { opacity: 0.2 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0.2 },
      },
      glideInTop: {
        '0%': { transform: 'translateY(-100%)'},
        '100%': { transform: 'translateX(0)'},
      },      
      glideInBottom: {
        '0%': { transform: 'translateY(500%)'},
        '100%': { transform: 'translateX(0)'},
      },
      glideIntoFPosition: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(-67vw)'},
      },
      glideIntoThPosition: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(-45vw)'},
      },
      glideIntoTwPosition: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(-22vw)'},
      },
      scaleUp: {
        '0%': { transform: 'scale(1)', opacity: '0'},
        '100%': { transform: 'scale(1.1)', opacity: '1'},
      },
    },

    animation: {
      'glide-in-right': 'glideInRight 01s ease-out',
      'glide-in-left': 'glideInLeft 01s ease-out',

      'glide-out-right-fast': 'glideOutRight 0.3s ease-out',
      'glide-out-left-fast': 'glideOutLeft 0.3s ease-in',

      'glide-in-right-fast': 'glideInRight 0.3s ease-in',
      'glide-in-left-fast': 'glideInLeft 0.3s ease-in',

      'fade-in': 'fadeIn 1s forwards',
      'fade-out': 'fadeOut 0.75s forwards',

      'glide-in-top': 'glideInTop 01s ease-out',
      'glide-in-bottom': 'glideInBottom 01s ease-out',
      'glide-in-bottom-fast': 'glideInBottom 0.5s ease-out',

      'glide-from-fourth-position': 'glideIntoFPosition 1s forwards',
      'glide-from-third-position': 'glideIntoThPosition 1s forwards',
      'glide-from-second-position': 'glideIntoTwPosition 1s forwards',

      'select': 'scaleUp 0.75s forwards',
      'fade-in-slow':'fadeIn 3s ease-out'
      
    },
  },
},
  plugins: [],
}

