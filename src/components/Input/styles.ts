import styled from 'styled-components'

export const ContainerInput = styled.div`
  label {
    display: block;
    color: var(--gray-500);
    margin-bottom: 1.5rem;
  }

  input {
    border: 0;
    border-bottom: 1px solid var(--gray-200);
    font-size: 1rem;
    width: 100%;

    transition: border 0.2s;

    ::placeholder {
      color: var(--black);
      font-weight: 500;
    }

    &:focus {
      border-bottom: 1px solid var(--magenta);
    }
  }

  span {
    color: var(--error);
  }
`
