import styled from 'styled-components'

export const ContainerLogo = styled.div`
  line-height: 1.2;
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo {
    margin-right: 1rem;
    padding: 0.3rem;
    border: solid 3px var(--black);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    strong {
      font-size: 1.2rem;
      transition: color 0.2s;
    }
  }

  .info {
    strong {
      display: block;
      font-size: 1.4rem;
      transition: color 0.2s;
    }

    span {
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 3px;
      color: var(--black);

      transition: color 0.2s;
    }
  }

  &:hover {
    .logo {
      border-color: var(--gray-500);

      strong {
        color: var(--gray-500);
      }
    }

    .info {
      strong {
        color: var(--gray-500);
      }

      span {
        color: var(--gray-500);
      }
    }
  }
`
