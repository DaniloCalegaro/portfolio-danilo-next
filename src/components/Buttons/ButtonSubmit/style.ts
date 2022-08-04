import styled from 'styled-components'

interface StatusProps {
  isSendingMessage: boolean
}

export const ContainerBtnContactMe = styled.div<StatusProps>`
  background: ${props =>
    props.isSendingMessage ? props.theme['magenta'] : props.theme['gray-500']};

  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: inline-flex;

  transition: background-color 0.2s;

  button {
    color: ${props => props.theme['white']};
    background: none;
    border: 0;

    cursor: ${props => props.isSendingMessage && 'not-allowed'};

    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  > svg {
    color: ${props => props.theme['white']};
  }

  &:hover {
    background-color: ${props => props.theme['magenta']};
  }
`
