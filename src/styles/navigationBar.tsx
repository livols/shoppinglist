import {Theme} from './types';

const Colors = {
  PRIMARY: '#077945',
  BACKGROUND: '#13131A',
  BAR: '#1C1C24',
  WHITE: '#FFFFFF',
  LIGHT_GREY: '#818181',
  RED: 'rgb(255, 69, 58)',
};

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
