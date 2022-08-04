import styled from 'styled-components'

export const ContainerSelect = styled.div`
  label {
    display: block;
    color: ${props => props.theme['gray-500']};
    margin-bottom: 1.45rem;
  }

  select {
    padding: 0.6rem;
    border-color: ${props => props.theme['gray-200']};
    font-size: 1rem;
    width: 100%;
  }

  span {
    color: ${props => props.theme['red']};
  }
`
