import { DefaultTheme } from 'styled-components';

interface MediaQueries {
  maxSm?: any;
  minSm?: any;
  maxMd?: any;
  minMd?: any;
  maxLg?: any;
  minLg?: any;
}

export interface ITheme {
  default: {
    background: string;
    primary: string;
    secondary: string;
    fontColor: string;
    shadow: string;
  };
  colors: {
    white: string;
    black: string;
    dark: string;
    blue: string;
    grey: string;
  };
  fontSizes: {
    display: number;
    header: number;
    subHeader: number;
    normal: number;
    medium: number;
    small: number;
    data: number;
  };
  spacings: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  breakpoints: MediaQueries;
}

const breakpoints = ['40em', '64em', '95em'];

const theme: DefaultTheme = {
  default: {
    background: '',
    primary: '',
    secondary: '',
    fontColor: '',
    shadow: '',
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    dark: '#171717',
    blue: '#367AAC',
    grey: '#E4E4E4',
  },
  fontSizes: {
    display: 35,
    header: 30,
    subHeader: 22,
    normal: 16,
    medium: 14,
    small: 12,
    data: 9,
  },
  spacings: {
    small: 10,
    medium: 15,
    large: 20,
    xlarge: 30,
    xxlarge: 40,
  },
  breakpoints: {
    maxSm: `@media screen and (max-width: ${breakpoints[0]})`,
    minSm: `@media screen and (min-width: ${breakpoints[0]})`,
    maxMd: `@media screen and (max-width: ${breakpoints[1]})`,
    minMd: `@media screen and (min-width: ${breakpoints[1]})`,
    maxLg: `@media screen and (max-width: ${breakpoints[2]})`,
    minLg: `@media screen and (min-width: ${breakpoints[2]})`,
  },
};

export default theme;
