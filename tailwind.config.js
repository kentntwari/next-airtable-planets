/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './common/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Antonio', 'sans-serif'],
      body: ['League Spartan', 'sans-serif'],
    },
    fontSize: {
      xs: '0.688rem',
      sm: '0.75rem',
      base: '0.875rem',
      lg: '2.5rem',
      xl: '5rem',
    },
    colors: {
      site: '#070724',
      white: '#ffffff',
      dark: '#070724',
      violet: '#6f2ed6',
      green: '#1ec2a4',
      gray: {
        light: '#838391',
        dark: '#38384f',
      },
      blue: {
        light: '#419ebb',
        sky: '#2d68f0',
      },
      orange: {
        slate: '#eda249',
        dark: '#cd5120',
      },
      red: {
        slate: '#d14c32',
        vivid: '#d83a34',
      },
    },
    lineHeight: {
      25: '25px',
      52: '52px',
      103: '103px',
    },
    letterSpacing: {
      tight: '-1.5px',
      wide: '1px',
      wider: '2.57px',
    },

    extend: {
      spacing: {
        3: '0.188rem',
        24: '1.5rem',
        48: '3rem',
        350: '21.875rem',
      },
    },
  },
  plugins: [],
};
