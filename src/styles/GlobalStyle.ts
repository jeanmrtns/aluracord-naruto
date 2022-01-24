import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Naruto';
        src: url('/fonts/njnaruto.ttf'); // pattern: /directoryName/file.extension
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        min-height: 100vh;
        min-width: 100vw;
        font-family: 'Naruto';
    }

    body {
        background-image: url('/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

`;
