import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #000000;
    line-height: 26px;
    font-weight: 400;
    font-size: 16px;
     
}
body, h1, h2, p {
    padding: 0;
    margin: 0;
}
*, *::after, *::before {
    box-sizing: border-box;
    //border: 1px solid red;
}
`;
