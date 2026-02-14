import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerProjectsSelected = styled(motion.section)`
  > span {
    display: block;
  }
`;

export const ButtonMoreProjects = styled.div`
  float: right;
  margin-top: 1rem;
`;

export const SwiperBox = styled(motion.div)`
  .swiper {
    margin-top: 2rem;
    width: 100%;
    height: 18rem;
  }

  .swiper-slide {
    background: ${(props) => props.theme["black"]};

    .detailsProjects {
      margin: 1rem 1.5rem;

      display: flex;
      justify-content: space-between;

      .info {
        .index {
          font-size: 0.8rem;
        }

        .linkRepository {
          color: ${(props) => props.theme["white"]};
          display: block;
          font-size: 1rem;
          font-weight: 500;

          transition: color 0.2s;

          &:hover {
            color: ${(props) => props.theme["magenta"]};
          }
        }
      }
      .preview {
        background: ${(props) => props.theme["gray-800"]};
        height: 1.5rem;
        border-radius: 1rem;
        padding: 0.5rem;

        font-size: 0.8rem;

        display: flex;
        align-items: center;

        color: ${(props) => props.theme["white"]};

        transition: background-color 0.2s;

        &:hover {
          background-color: ${(props) => props.theme["magenta"]};
        }
      }
    }

    .tags {
      color: ${(props) => props.theme["gray-500"]};
      font-size: 0.7rem;
    }
  }

  .swiper-pagination-bullet {
    background: ${(props) => props.theme["gray-500"]};
    opacity: 1;

    &.swiper-pagination-bullet-active {
      background: ${(props) => props.theme["magenta"]};
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme["gray-500"]};
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: ${(props) => props.theme["magenta"]};
  }
`;
