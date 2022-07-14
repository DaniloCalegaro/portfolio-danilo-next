import styled from 'styled-components'

export const Container = styled.div`
  background: var(--gray-500);
  opacity: 0.6;
  padding: 1rem;
  line-height: 0;
  clip-path: circle(40%);
  transition: opacity, transform 0.2s;

  > svg {
    color: var(--white);
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`
