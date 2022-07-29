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
    --gray-800: #434447;
    --black: #0f141e;
    --magenta: #ff3366;
    --error: #EC3B14;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--gray-100); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--gray-500); 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-800); 
  }

  html {
    scroll-behavior: smooth;
    
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 800;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  button, a {
    cursor: pointer;
  }

  span {
    color: var(--gray-500);
  }

  section + section {
    margin-top: 4rem;
  }

  .index {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1.5rem;
  }

  .title {
    font-size: 3rem;
    line-height: 3.4rem;
    color: var(--black);
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  @media (min-width: 720px) {
    .title {
      font-size: 3.75rem;
      line-height: 4rem;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
`
