import styled from 'styled-components'

export const ContainerProjectsSelected = styled.section`
  > div {
    > span {
      display: block;
    }

    .buttonMoreProjects {
      float: right;
    }
  }
`

export const SwiperBox = styled.div`
  .swiper {
    margin-top: 2rem;
    width: 100%;
    height: 30rem;
  }

  .swiper-slide {
    background: linear-gradient(
      180deg,
      var(--black) 20%,
      rgba(255, 255, 255, 0) 60%
    );

    display: flex;
    justify-content: center;
    align-items: flex-start;

    position: relative;

    .infoProjects {
      position: absolute;
      left: 0;
      padding: 1rem;

      span {
        font-size: 0.8rem;
      }
      strong {
        color: var(--white);
        display: block;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    img {
      display: block;
      width: 100%;
      height: 90%;
      object-fit: cover;

      z-index: -2;
    }

    //position: relative;
  }

  .swiper-slide .swiper-pagination-bullet-active {
    background: var(--magenta);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--black);
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: var(--magenta);
  }
`
