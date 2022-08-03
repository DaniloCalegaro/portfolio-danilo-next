import styled from 'styled-components'

export const ContainerBtnUp = styled.a`
  i {
    background: ${props => props.theme['gray-500']};
    padding: 1rem;
    line-height: 0;
    clip-path: circle(40%);
    opacity: 0.6;

    display: flex;

    //transition: opacity 0.2s, transform 0.2s;

    > svg {
      color: ${props => props.theme['white']};
    }
  }
`
