import { useEffect, useState } from 'react'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import ptBr from 'date-fns/locale/pt'
import { ButtonRedirect } from '../Buttons/ButtonRedirect'

import repositoriesJson from '../../../repositories.json'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination } from 'swiper'

import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

import { GithubLogo } from 'phosphor-react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ContainerProjectsSelected, SwiperBox } from './styles'
interface ApiGithubRepos {
  id: number
  name: string
  created_at: string
  htmlUrl: string
  urlImagePortfolio: string
  tags: string
}

export function ProjectsSelected() {
  const [repositories, setRepositories] = useState<ApiGithubRepos[]>([])

  useEffect(() => {
    const data = repositoriesJson.repos.map(project => ({
      id: project.id,
      name: project.name,
      created_at: project.created_at,
      htmlUrl: project.html_url,
      urlImagePortfolio: project.url_image_portfolio,
      tags: project.tags
    }))
    setRepositories(data)
    //console.log(data)
  }, [])

  const formattedDate = (date: string) =>
    format(parseISO(date), "MMMM ' de ' yyyy", { locale: ptBr })

  // const splitString = (stringToSplit: string, separator: string) =>
  //   stringToSplit.split(separator)

  const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1)

  return (
    <ContainerProjectsSelected id="projects">
      <motion.div
        className="info"
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.span className="index" variants={fadeIn('up')}>
          Projetos selecionados
        </motion.span>
        <motion.strong className="title" variants={fadeIn('up')}>
          Estudos front-end
        </motion.strong>

        <SwiperBox>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2
              }
            }}
            spaceBetween={30}
            //slidesPerGroup={2}
            loop={false}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true
            }}
            navigation={true}
            mousewheel={true}
            modules={[Pagination, Navigation, Mousewheel]}
          >
            {repositories.map(repository => (
              <SwiperSlide key={repository.id}>
                <div className="infoProjects">
                  <span className="index">{repository.created_at}</span>
                  <a
                    className="linkRepository"
                    href={repository.htmlUrl}
                    target="_blank"
                  >
                    {repository.name}
                  </a>
                </div>
                <Image
                  src={repository.urlImagePortfolio}
                  alt={`foto de ${repository.name}`}
                  width="1000"
                  height="500"
                />
                <span className="tags">{repository.tags}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperBox>

        <div className="buttonMoreProjects">
          <ButtonRedirect
            icon={<GithubLogo size={20} />}
            name="Ver todos"
            href="https://github.com/DaniloCalegaro?tab=repositories"
            target="_blank"
          />
        </div>
      </motion.div>
    </ContainerProjectsSelected>
  )
}
