import { Container, SwiperBox } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function ProjectsSelected() {
  return (
    <Container>
      <span className="index">Projetos selecionados</span>
      <strong className="title">Estudos front-end</strong>

      <SwiperBox>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            }
          }}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true
          }}
          navigation={true}
          mousewheel={true}
          modules={[Pagination, Navigation, Mousewheel]}
        >
          <SwiperSlide key="1">
            <img
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide key="2">
            <img
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide key="3">
            <img
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide key="4">
            <img
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </SwiperBox>
    </Container>
  )
}
