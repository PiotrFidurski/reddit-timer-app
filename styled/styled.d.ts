import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
      button: string;
    };
    color: {
      secondary: string;
      default: string;
      highlight: string;
    };
  }
}
