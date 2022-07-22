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

    position: relative;

    .infoProjects {
      margin: 1.5rem;

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

    .tags {
      color: var(--gray-500);
      font-size: 0.8rem;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0.5rem 1.5rem;
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
