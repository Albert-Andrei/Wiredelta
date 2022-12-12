import styledNormalize from './normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default GlobalStyle;
