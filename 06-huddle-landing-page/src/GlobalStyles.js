import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    :root {
        --violet: hsl(257, 40%, 49%);
        --soft-magenta: hsl(300, 69%, 71%);
        --white: hsl(100, 100%, 100%);
        --base: 400;
        --bold: 600;
        --font-primary: 'Poppins', 'sans-serif';
        --font-secondary: 'Open Sans', 'sans-serif'
    }

    body {
        height: 100svh;
        font-family: var(--font-primary);
    }

    #root {
        height: 100%;
        overflow: auto;
        background-color: var(--violet);
        background-image: url(/bg-mobile.svg);
        background-repeat: no-repeat;

        @media screen and (min-width: 375px) {
            background-image: url(/bg-desktop.svg);
	}
    }

`;

export default GlobalStyles;
