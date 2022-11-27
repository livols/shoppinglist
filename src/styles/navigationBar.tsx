import {Theme} from './types';
import {Colors} from './colors';

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.WHITE,
    background: Colors.BACKGROUND,
    card: Colors.BAR,
    text: Colors.WHITE,
    border: Colors.BAR,
    notification: Colors.RED,
  },
};

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    buttonActive: Colors.WHITE,
    buttonInactive: Colors.LIGHT_GREY,
  },
};
