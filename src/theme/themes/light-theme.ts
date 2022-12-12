import global from '../theme';
import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  ...global,
  default: {
    background: '#fff',
    fontColor: '#4B4343',
  },
};

export default lightTheme;
