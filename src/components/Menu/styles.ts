import styled from 'styled-components'

export const ContainerMenuSideBar = styled.div`
  > a {
    display: flex;
    gap: 0.5rem;

    span {
      color: ${props => props.theme['black']};
      font-weight: 500;
    }

    svg {
      color: ${props => props.theme['black']};
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${props => props.theme['magenta']};
      }
    }
  }
`

export const Main = styled.main`
  nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: ${props => props.theme['black']};

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 12;

    .header {
      padding: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .index {
        color: ${props => props.theme['white']};
        display: flex;
        line-height: 0;
        align-items: center;
        gap: 0.5rem;

        svg {
          transition: color 0.2s;
        }

        &:hover {
          svg {
            color: ${props => props.theme['magenta']};
          }
        }
      }
    }
    span {
      margin-top: 1rem;
    }

    ul {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      li {
        a {
          color: ${props => props.theme['white']};
          font-size: 3rem;
          font-weight: 800;

          &::after {
            content: '';
            width: 0px;
            height: 1px;
            opacity: 0;

            display: block;
            //margin-top: 0rem;
            background: ${props => props.theme['magenta']};
            transition: width 0.2s, opacity 0.4s;
          }

          &:hover::after {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }

    footer {
      margin: auto 1rem 1rem;
      padding-top: 1rem;
      width: 100%;
      border-top: solid 1px ${props => props.theme['gray-100']};

      p {
        font-size: 0.8rem;
        color: ${props => props.theme['gray-500']};
        text-align: center;
      }
    }
  }
`
