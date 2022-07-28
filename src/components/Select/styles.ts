import styled from 'styled-components'

export const ContainerSelect = styled.div`
  label {
    display: block;
    color: var(--gray-500);
    margin-bottom: 0.8rem;
  }

  select {
    padding: 0.6rem;
    border-color: var(--gray-200);
    font-size: 1rem;
    width: 100%;
  }

  span {
    color: var(--error);
  }
`