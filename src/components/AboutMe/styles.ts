import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerAboutMe = styled(motion.section)`
  //margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    text-align: center;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }

  span {
    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 1rem;
    width: 80%;
    text-align: center;
    line-height: 1.6rem;
  }
`;
export const ContainerskillsComponent = styled(motion.section)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .skills {
    display: flex;
    align-items: center;

    ul {
      column-count: 1;
    }
  }

  &::before {
    content: "";
    width: 100%;
    border-top: solid 1px ${(props) => props.theme["gray-100"]};
    margin-bottom: 2rem;
  }

  @media (min-width: 600px) {
    .skills {
      ul {
        column-count: 2;
        column-gap: 15rem;
      }
    }
  }
`;
