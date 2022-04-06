import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Urbanist', sans-serif;

        a {
            text-decoration: none;
            color: inherit;
        }
    }

`;

export default GlobalStyles;
