import styled from 'styled-components'

export const ContainerBtnContactMe = styled.div`
  background: ${props => props.theme['gray-500']};
  padding: 0.5rem 1rem;
  border-radius: 2rem;

  transition: background-color 0.2s;

  a {
    color: ${props => props.theme['white']};

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
