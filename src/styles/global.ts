import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-100"]}; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-500"]}; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme["gray-800"]}; 
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
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
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
    color: ${(props) => props.theme["black"]};
  }

  button, a {
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme["gray-500"]};
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
    color: ${(props) => props.theme["black"]};
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

  #nprogress .bar {
  background: ${(props) => props.theme["magenta"]} !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px ${(props) => props.theme["magenta"]}, 0 0 5px ${(
    props,
  ) => props.theme["magenta"]};
}

#nprogress .spinner-icon {
  border-top-color: ${(props) => props.theme["magenta"]};
  border-left-color: ${(props) => props.theme["magenta"]};
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
`;
