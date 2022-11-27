import {Theme} from './types';
import {Colors} from './colors';

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.TEXT,
    background: Colors.BACKGROUND,
    card: Colors.BAR,
    text: Colors.TEXT,
    border: Colors.BAR,
    notification: Colors.NOTIFICATION,
  },
};

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    buttonActive: Colors.TEXT,
    buttonInactive: Colors.INACTIVE,
  },
};
