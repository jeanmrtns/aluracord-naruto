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

    .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width:100%;
    max-width: 576px;
    background: #FFF;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

`;
