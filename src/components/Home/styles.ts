import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .info {
    max-width: 50vw;
    //margin-top: 38vh;

    //margin-top: max(7.8rem, calc(100vh - 450px));
    margin-top: min(20rem, calc(100vh - 450px));

    span {
      display: block;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
      color: var(--black);
    }

    > strong {
      font-size: 3.875rem;
      line-height: 4.5rem;
      color: var(--black);
    }

    > p {
      font-size: 1.2rem;
      font-weight: 500;
      margin: 1.2rem 0;
    }

    .details {
      p {
        display: inline-flex;
        gap: 1rem;

        strong {
          color: var(--black);
          transition: color 0.2s;
        }
      }

      a:hover {
        strong {
          color: var(--magenta);
        }
      }
    }
  }

  .imgProfile {
    position: absolute;
    top: 1.5rem;
    right: 0rem;

    z-index: -1;

    img {
      width: 500px;
    }
  }

  .btnScroll {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .info {
      max-width: 100vw;

      > strong {
        font-size: 3rem;
        line-height: 3.4rem;
      }
    }

    .imgProfile {
      img {
        width: 400px;
      }
    }
  }
`
