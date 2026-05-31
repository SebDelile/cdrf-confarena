import localFont from 'next/font/local';

export const goudyFont = localFont({
  src: [
    {
      path: '../fonts/itc-goudy-sans-lt-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/itc-goudy-sans-lt-medium-italic.ttf',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-goudy',
});

export const caslonAntiqueFont = localFont({
  src: [
    {
      path: '../fonts/caslon-antique.bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/caslon-antique.regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-caslonAntique',
});
