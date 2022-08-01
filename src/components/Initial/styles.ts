import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContainerInitial = styled.section`
  display: flex;
  flex-direction: column;
`

export const Info = styled(motion.div)`
  max-width: 100vw;

  margin-top: max(7.8rem, calc(100vh - 400px));

  span {
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1rem;
    color: var(--black);
  }

  > p {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1.2rem 0;
  }

  .details {
    p {
      display: inline-flex;
      gap: 1rem;

      strong {
        color: var(--black);
        transition: color 0.2s;
      }
    }

    a:hover {
      strong {
        color: var(--magenta);
      }
    }
  }

  @media (min-width: 720px) {
    max-width: 70vw;
  }

  @media (min-width: 1280px) {
    max-width: 50vw;
  }

  @media (min-width: 1440px) {
    max-width: 35vw;
  }
`

export const ImgProfile = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  right: 0rem;

  z-index: -1;

  img {
    width: 400px;
  }

  @media (min-width: 720px) {
    img {
      width: 700px;
    }
  }

  @media (min-width: 1280px) {
    img {
      width: 800px;
    }
  }

  @media (min-width: 1440px) {
    img {
      width: 900px;
    }
  }
`

export const BackgroundDev = styled(motion.div)`
  position: absolute;
  top: 10rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  z-index: -2;

  strong {
    font-size: calc(18vw);
    color: var(--white);
    text-shadow: 0px 0px 80px rgba(0, 0, 0, 0.1);
  }
`
