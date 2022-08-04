import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  border-top: 1px solid ${props => props.theme['gray-100']};

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  strong {
    font-size: 1.3rem;
  }

  p {
    margin-top: 1.5rem;
    color: ${props => props.theme['gray-500']};
    font-size: 1rem;
  }

  ul {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    list-style: none;

    li {
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;

      i {
        margin-right: 1rem;

        svg {
          font-size: 2rem;
          color: ${props => props.theme['gray-500']};
        }
      }
    }
  }

  .contacts {
    max-width: 20rem;
  }
`

export const Contacts = styled(motion.div)`
  max-width: 20rem;
`
export const SocialNetworks = styled(motion.div)`
  li {
    transition: transform 0.1s;

    &:hover {
      transform: scale(1.05);
    }
  }
`
