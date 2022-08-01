import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContainerHeader = styled(motion.header)`
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ul {
    li {
      display: inline-flex;
      align-items: center;

      strong {
        margin-right: 0.8rem;
        letter-spacing: 3px;
      }

      a {
        svg {
          transition: color, transform 0.2s;

          &:hover {
            transform: scale(1, 1.2);
            color: var(--magenta);
          }
        }
      }
    }
  }
`
