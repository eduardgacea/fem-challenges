import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    :root {
        --bg-dark: #192535;
        --bg-dark-light: #3d4259;
        --bg-dark-lighter: #5f647b;
        --bg-dark-lightest: #dfefff;
        --bg-light: #efefff;
        --font-dark: #172333;
        --font-light: #ffffff;
        --font-gray: #aab;
        

        /* common styles */
        --accent: #f58b51;
        --accent-light:#fbcbb2;
        --error: #ef1971;
        --icon-html: #fbcbb2;
        --icon-css: #b6f6e5;
        --icon-javascript: #8fc9f5;
        --icon-accessibility: #b5a0cf;  
        --icon-html-strong: #f4712a;
        --icon-css-strong: #1bdaa7;
        --icon-javascript-strong: #1488e1;
        --icon-accessibility-strong: #7652a3;
        --font: 'Rubik', 'system-ui', 'sans-serif';
    }

    body {
        font-family: var(--font);
        height: 100dvh;
    }

    #root{
        height: 100%;
        background-color: var(--bg-dark);
    }

    ::-webkit-progress-bar {
		background-color: var(--bg-dark-light);
        border-radius: 12px;
	}
    
    ::-webkit-progress-value {
        background-color: var(--accent);
        border-radius: 12px;
    }
`;

export default GlobalStyles;
