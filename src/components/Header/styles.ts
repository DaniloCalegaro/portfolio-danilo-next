import styled from 'styled-components'

export const Container = styled.header`
  //max-width: 1440px;
  padding: 1.2rem 1.5rem;
  margin: 0 auto;
  line-height: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: flex;
    align-items: center;

    strong {
      margin-right: 0.8rem;
      letter-spacing: 3px;
    }

    i {
      svg {
        transition: color, transform 0.2s;
      }
    }

    &:hover {
      i {
        svg {
          transform: scale(1, 1.2);
          color: var(--magenta);
        }
      }
    }
  }
`
