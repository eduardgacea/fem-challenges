import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --almost-white: hsl(0, 0%, 98%);
        --medium-gray: hsl(0, 0%, 41%);
        --almost-black: hsl(0, 0%, 8%);
        --font: 'Epilogue', 'sans-serif';
    }

    html {
        font-size: 18px;
    }

    body{
        font-family: var(--font);
    }

`;

export default GlobalStyles;
