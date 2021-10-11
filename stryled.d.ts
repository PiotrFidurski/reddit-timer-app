import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: { default: string };
    };
  }
}
