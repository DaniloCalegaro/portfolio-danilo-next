import styled from 'styled-components'

export const ContainerWait = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme['black']};

  position: relative;

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
        color: ${props => props.theme['white']};
        display: block;
        font-size: 1.2rem;
      }

      .title {
        color: ${props => props.theme['white']};
      }
    }
  }
`
