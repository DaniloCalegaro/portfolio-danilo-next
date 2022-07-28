import styled from 'styled-components'

type Props = {
  isSendingMessage: boolean
}

export const ContainerBtnContactMe = styled.div<Props>`
  background: ${props =>
    props.isSendingMessage ? 'var(--magenta)' : 'var(--gray-500)'};

  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: inline-flex;

  transition: background-color 0.2s;

  button {
    color: var(--white);
    background: none;
    border: 0;

    cursor: ${props => props.isSendingMessage && 'not-allowed'};

    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  > svg {
    color: var(--white);
  }

  &:hover {
    background-color: var(--magenta);
  }
`
