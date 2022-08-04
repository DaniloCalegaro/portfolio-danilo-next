import styled, { css } from 'styled-components'

type Props = {
  isBaseDark: boolean
}
export const ContainerLogo = styled.a<Props>`
  line-height: 1.2;
  display: flex;
  align-items: center;

  .design {
    margin-right: 1rem;
    padding: 0.3rem;

    border: solid 3px
      ${props =>
        props.isBaseDark ? props.theme['gray-500'] : props.theme['black']};

    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    strong {
      font-size: 1.2rem;
      color: ${props =>
        props.isBaseDark ? props.theme['gray-500'] : props.theme['black']};
      transition: color 0.2s;
    }
  }

  .info {
    .name {
      display: block;
      font-size: 1.4rem;
      color: ${props =>
        props.isBaseDark ? props.theme['gray-500'] : props.theme['black']};
      transition: color 0.2s;
    }

    .description {
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 3px;
      color: ${props =>
        props.isBaseDark ? props.theme['gray-500'] : props.theme['black']};

      transition: color 0.2s;
    }
  }

  &:hover {
    .design {
      border-color: ${props =>
        props.isBaseDark ? props.theme['gray-200'] : props.theme['gray-500']};

      strong {
        color: ${props =>
          props.isBaseDark ? props.theme['gray-200'] : props.theme['gray-500']};
      }
    }

    .info {
      strong {
        color: ${props =>
          props.isBaseDark ? props.theme['gray-200'] : props.theme['gray-500']};
      }

      span {
        color: ${props =>
          props.isBaseDark ? props.theme['gray-200'] : props.theme['gray-500']};
      }
    }
  }
`
