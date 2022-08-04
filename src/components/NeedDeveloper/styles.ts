import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContainerNeedDeveloper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;

  a {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 800;
    transition: transform 0.2s;
    //color: transparent;
    //-webkit-text-stroke: 1px var(--black);
    transition: color 0.2s;
  }

  a:hover {
    //transform: scale(1.05);
    color: ${props => props.theme['gray-500']};
  }

  svg {
    margin-left: 1rem;
    margin-bottom: -0.5rem;
  }

  @media (min-width: 1280px) {
    a::after {
      content: '';
      width: 0px;
      height: 3px;
      opacity: 0;

      display: block;
      margin-top: 0.5rem;
      background: ${props => props.theme['magenta']};
      transition: width 0.2s, opacity 0.4s;
    }

    a:hover::after {
      width: 100%;
      opacity: 1;
    }

    a:hover {
      color: ${props => props.theme['black']};
    }
  }
`
