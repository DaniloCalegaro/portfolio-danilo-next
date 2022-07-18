import styled from 'styled-components'

export const ContainerBtnContactMe = styled.div`
  background: var(--gray-500);
  padding: 0.5rem 1rem;
  border-radius: 2rem;

  transition: background-color, transform 0.2s;

  a {
    color: var(--white);

    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  > svg {
    color: var(--white);
  }

  &:hover {
    transform: scale(1.05);
    background-color: var(--magenta);
  }
`
