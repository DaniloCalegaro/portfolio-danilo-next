import styled from 'styled-components'

export const ContainerTextArea = styled.div`
  label {
    display: block;
    color: var(--gray-500);
    margin-bottom: 1.5rem;
  }

  textarea {
    border: 0;
    border-bottom: 1px solid var(--gray-200);
    font-size: 1rem;
    width: 100%;
    height: 2.8rem;

    padding-top: 0.65rem;

    transition: border 0.2s;

    ::placeholder {
      color: var(--black);
      font-weight: 500;
      //transform: translateY(0.57rem);
    }

    &:focus {
      border-bottom: 1px solid var(--magenta);
    }
  }

  span {
    color: var(--error);
  }
`
