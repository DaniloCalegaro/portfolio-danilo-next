import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  .info {
    max-width: 100vw;

    margin-top: max(7.8rem, calc(100vh - 400px));
    //margin-top: min(20rem, calc(100vh - 400px));

    span {
      display: block;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
      color: var(--black);
    }

    > strong {
      font-size: 3rem;
      line-height: 3.4rem;
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
      width: 400px;
    }
  }

  @media (min-width: 720px) {
    .info {
      max-width: 70vw;

      > strong {
        font-size: 3.75rem;
        line-height: 4rem;
      }
    }

    .imgProfile {
      img {
        width: 700px;
      }
    }
  }

  @media (min-width: 1280px) {
    .info {
      max-width: 50vw;

      > strong {
        font-size: 3.75rem;
        line-height: 4rem;
      }
    }

    .imgProfile {
      img {
        width: 800px;
      }
    }
  }

  @media (min-width: 1440px) {
    .info {
      max-width: 35vw;

      > strong {
        font-size: 3.75rem;
        line-height: 4rem;
      }
    }

    .imgProfile {
      img {
        width: 900px;
      }
    }
  }
`
