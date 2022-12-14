import { DefaultTheme } from 'styled-components';
import global from '../theme';

const darkTheme: DefaultTheme = {
  ...global,
  default: {
    background: '#1F374A',
    fontColor: '#fff',
    primary: '#4B4343',
    secondary: '',
  },
};

export default darkTheme;
