/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  theme: {
    fontSize: {
      xs: ['12px','16px'],
      sm: ['14px', '20px'],
      base: ['15px', '22px'],
      lg: ['16px', '24px'],
      xl: ['18px', '28px'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

