import { createGlobalStyle } from "styled-components";
import { themeGet } from '@styled-system/theme-get';

//-------------------------------------------------------------
//----------------Point d'entrée GlobalStyles------------------
//-------------------------------------------------------------

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap');


    * {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }

    ::selection {
        background: ${themeGet("primary.0", "#F9185B")};
        color: ${themeGet("color.1", "#ffffff")};
    }

    html {
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
    }

    html,
    html a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    li,
    dl,
    th,
    dt,
    input,
    textarea,
    span,
    div {
        font-family: 'Poppins', sans-serif; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
        //overflow-y: scroll !important;
    }
    //tes global styles et tes classes customs que tu veux modifier à l'état global de ton application
`;

export default GlobalStyles;