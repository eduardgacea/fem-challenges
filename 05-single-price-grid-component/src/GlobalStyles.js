import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --primary-cyan: hsl(179, 62%, 43%);
        --primary-cyan-transparent: hsla(179, 62%, 43%, 0.65);
        --primary-yellow: hsl(71, 73%, 54%);
        --neutral-gray: hsl(204, 43%, 93%);
        --neutral-transparent: hsl(204, 43%, 93%, 0.65);
        --neutral-blue: hsl(218, 22%, 67%);
        --neutral-blue-transparent: hsl(218, 22%, 67%, 0.5);
        --font: 'Karla', sans-serif;
    }

    body {
        height: 100dvh;
        background-color: var(--neutral-blue-transparent);
        font-family: var(--font);
        padding: 4rem 0rem;
    }

`;

export default GlobalStyles;
