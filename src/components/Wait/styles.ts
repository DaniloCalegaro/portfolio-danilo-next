import styled from 'styled-components'

export const ContainerWait = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--black);

  position: relative;
  z-index: 20;

  .containerInfos {
    max-width: 1280px;
    height: 100%;
    padding: 2rem 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .containerPageLoading {
      .index {
        color: var(--white);
        display: block;
        font-size: 1.2rem;
      }

      .title {
        color: var(--white);
      }
    }
  }
`
