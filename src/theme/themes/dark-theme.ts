import { DefaultTheme } from 'styled-components';
import global from '../theme';

const darkTheme: DefaultTheme = {
  ...global,
  default: {
    background: '#1F374A',
    fontColor: '#fff',
  },
};

export default darkTheme;
