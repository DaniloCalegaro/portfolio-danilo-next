import styled from "styled-components";

export const ContainerIndex = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  .buttonsControl {
    .btnScrool {
      position: fixed;
      bottom: 1rem;
      right: calc(100vw / 2);
      z-index: 10;
    }

    .btnUp {
      margin: 0 1rem;
      position: fixed;
      bottom: 1rem;
      right: 0;
      z-index: 10;
    }
  }

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) => props.theme["magenta"]};
    transform-origin: 0%;
    z-index: 10;
  }
`;
