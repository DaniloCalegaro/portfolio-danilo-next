import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  //border: solid 1px;

  .buttonsControl {
    .btnScrool {
      position: fixed;
      bottom: 1rem;
      right: calc(100vw / 2);
      z-index: 10;
    }

    .btnContactMe {
      margin: 0 1rem;
      position: fixed;
      bottom: 1rem;
      left: 0;
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
`
