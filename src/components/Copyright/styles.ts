import styled from 'styled-components'

export const ContainerCopyright = styled.div`
  line-height: 1.2;
  display: flex;
  align-items: center;

  margin: 0 1rem 1rem;

  .logoCopyright {
    margin-right: 0.6rem;
    padding: 0.3rem;
    border: solid 2px ${props => props.theme['gray-200']};
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 0.9rem;
      color: ${props => props.theme['gray-200']};
    }
  }

  .infoCopyright {
    span {
      display: block;
      font-size: 0.9rem;
      color: ${props => props.theme['gray-200']};
    }

    p {
      font-size: 0.6rem;
      color: ${props => props.theme['gray-200']};
    }
  }
`
