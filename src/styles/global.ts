import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #ffffff;
    --gray-100: #cfd0d2;
    --gray-200: #b7b8bb;
    --gray-500: #878a8f;
    --black: #0f141e;
    --magenta: #ff3366;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white);
    color: var(--gray-500);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 800;
  }

  button, a {
    cursor: pointer;
  }
`
