import styled from 'styled-components'

export const ContainerInput = styled.div`
  label {
    display: block;
    color: ${props => props.theme['gray-500']};
    margin-bottom: 1.5rem;
  }

  input {
    border: 0;
    border-bottom: 1px solid ${props => props.theme['gray-200']};
    font-size: 1rem;
    width: 100%;

    transition: border 0.2s;

    ::placeholder {
      color: ${props => props.theme['black']};
      font-weight: 500;
    }

    &:focus {
      border-bottom: 1px solid ${props => props.theme['magenta']};
    }
  }

  span {
    color: ${props => props.theme['red']};
  }
`
