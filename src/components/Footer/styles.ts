import styled from 'styled-components'

export const Container = styled.footer`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  border-top: 1px solid var(--gray-100);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  strong {
    font-size: 1.3rem;
  }

  p {
    margin-top: 1.5rem;
    color: var(--gray-500);
    font-size: 1rem;
  }

  ul {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    list-style: none;

    li {
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;

      i {
        margin-right: 1rem;

        svg {
          font-size: 2rem;
          color: var(--gray-500);
        }
      }
    }
  }

  .contacts {
    max-width: 20rem;
  }
`
