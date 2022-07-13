import styled from 'styled-components'

export const Container = styled.div`
  max-width: 50vw;
  margin-top: 38vh;

  span {
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1rem;
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
`
