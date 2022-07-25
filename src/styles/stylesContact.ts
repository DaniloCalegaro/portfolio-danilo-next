import styled from 'styled-components'

export const ContainerContact = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 2rem;
    text-align: center;
    line-height: 3rem;
  }

  .containerMapsAndForms {
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .location {
    iframe {
      width: 100%;
      height: 25rem;
    }
  }

  form {
    border: solid 1px;
  }

  @media (min-width: 720px) {
    .containerMapsAndForms {
      grid-template-columns: 1fr 2fr;
    }

    .location {
      iframe {
        width: 100%;
      }
    }
  }
`
