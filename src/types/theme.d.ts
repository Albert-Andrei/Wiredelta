// import original module declarations
import { ITheme } from '../theme/theme';
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
