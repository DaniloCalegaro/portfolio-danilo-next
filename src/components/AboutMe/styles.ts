import styled from 'styled-components'

export const Container = styled.section`
  //margin-top: 4rem;

  .wordsAbout {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      text-align: center;
      font-size: 2rem;
      line-height: 2.5rem;
      margin-bottom: 1.5rem;
    }

    span:last-child {
      width: 80%;
    }
  }

  .skillsComponent {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .skills {
      display: flex;
      align-items: center;

      ul {
        column-count: 1;
      }
    }

    &::before {
      content: '';
      width: 100%;
      border-top: solid 1px var(--gray-100);
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 600px) {
    .skillsComponent {
      .skills {
        ul {
          column-count: 2;
          column-gap: 15rem;
        }
      }
    }
  }
`
