import styled from 'styled-components'

type Props = {
  isBaseDark: boolean
}
export const ContainerLogo = styled.a<Props>`
  line-height: 1.2;
  display: flex;
  align-items: center;
  cursor: default;

  .logo {
    margin-right: 1rem;
    padding: 0.3rem;
    border: ${props =>
      props.isBaseDark
        ? 'solid 3px var(--gray-500)'
        : 'solid 3px var(--black)'};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    strong {
      font-size: 1.2rem;
      color: ${props =>
        props.isBaseDark ? 'var(--gray-500)' : 'var(--black)'};
      transition: color 0.2s;
    }
  }

  .info {
    strong {
      display: block;
      font-size: 1.4rem;
      color: ${props =>
        props.isBaseDark ? 'var(--gray-500)' : 'var(--black)'};
      transition: color 0.2s;
    }

    span {
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 3px;
      color: ${props =>
        props.isBaseDark ? 'var(--gray-500)' : 'var(--black)'};

      transition: color 0.2s;
    }
  }

  /* &:hover {
    .logo {
      border-color: ${props =>
    props.isBaseDark ? 'var(--gray-200)' : 'var(--gray-500)'};

      strong {
        color: ${props =>
    props.isBaseDark ? 'var(--gray-200)' : 'var(--gray-500)'};
      }
    }

    .info {
      strong {
        color: ${props =>
    props.isBaseDark ? 'var(--gray-200)' : 'var(--gray-500)'};
      }

      span {
        color: ${props =>
    props.isBaseDark ? 'var(--gray-200)' : 'var(--gray-500)'};
      }
    }
  } */
`
