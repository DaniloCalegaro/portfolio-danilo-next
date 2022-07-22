import styled from 'styled-components'

export const ContainerProjectsSelected = styled.section`
  > div {
    > span {
      display: block;
    }

    .buttonMoreProjects {
      float: right;
      margin-top: 1rem;
    }
  }
`

export const SwiperBox = styled.div`
  .swiper {
    margin-top: 2rem;
    width: 100%;
    height: 18rem;
  }

  .swiper-slide {
    background: var(--black);

    .detailsProjects {
      margin: 1rem 1.5rem;

      display: flex;
      justify-content: space-between;

      .info {
        .index {
          font-size: 0.8rem;
        }

        .linkRepository {
          color: var(--white);
          display: block;
          font-size: 1rem;
          font-weight: 500;

          transition: color 0.2s;

          &:hover {
            color: var(--magenta);
          }
        }
      }
      .preview {
        background: var(--gray-500);
        height: 1.5rem;
        border-radius: 1rem;
        padding: 0.5rem;

        font-size: 0.8rem;

        display: flex;
        align-items: center;

        color: var(--white);

        transition: background-color 0.2s;

        &:hover {
          background-color: var(--magenta);
        }
      }
    }

    .tags {
      color: var(--gray-500);
      font-size: 0.7rem;
      //position: absolute;
    }
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--magenta);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--gray-500);
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: var(--magenta);
  }
`
