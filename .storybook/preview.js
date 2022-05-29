import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

export const decorators = [withBackgrounds];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: [
    { name: 'white', value: 'white', default: true },
    { name: 'dark', value: '#222' },
    { name: 'facebook', value: '#4267B2' },
  ],
};
