import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerProjectsSelected = styled(motion.section)`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 4rem;
`;

export const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme["black"]};
  border: 1px solid ${(props) => props.theme["gray-800"]};
  border-radius: 0.5rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme["magenta"]};
  }

  /* Decorative radial gradient */
  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${(props) => props.theme["magenta"]} 0%,
      transparent 70%
    );
    opacity: 0.08;
    filter: blur(60px);
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["white"]};
    margin-bottom: 1rem;
    line-height: 1.2;

    span {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  p {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 1rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["magenta"]};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

export const ButtonContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

export const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme["white"]};
  color: ${(props) => props.theme["black"]};
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme["gray-100"]};
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
