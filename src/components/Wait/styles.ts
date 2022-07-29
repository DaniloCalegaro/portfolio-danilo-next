import styled from 'styled-components'

export const ContainerWait = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--black);

  position: relative;
  z-index: 20;

  .containerInfos {
    max-width: 1280px;
    height: 100%;
    padding: 2rem 1.5rem;
    margin: 0 auto;

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
