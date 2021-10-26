import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
      darker: string;
    };
    color: {
      secondary: string;
      default: string;
    };
  }
}
