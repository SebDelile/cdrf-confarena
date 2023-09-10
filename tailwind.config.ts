import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '420px',
      xs: '540px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#911a11',
        'primary-contrast': '#EED',
        background: '#ccc',
      },
      fontFamily: {
        body: ['DM sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
