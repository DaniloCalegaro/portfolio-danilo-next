import { format, parseISO } from 'date-fns'
import ptBr from 'date-fns/locale/pt'

import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

import { ContainerProjectsSelected, SwiperBox } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ButtonRedirect } from '../Buttons/ButtonRedirect'
import { GithubLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { apiGithub } from '../../services/apiGithub'

interface ApiGithubRepos {
  id: string
  name: string
  created_at: string
  html_url: string
}

export function ProjectsSelected() {
  const [repositories, setRepositories] = useState<ApiGithubRepos[]>([])

  useEffect(() => {
    async function projectsGitHub() {
      const response = await apiGithub.get<ApiGithubRepos[]>(
        '/users/DaniloCalegaro/repos'
      )
      const data = response.data.map(project => ({
        id: project.id,
        name: project.name,
        created_at: project.created_at,
        html_url: project.html_url
      }))

      const lastProjects = data
        .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        .filter((project, index) => index < 6)

      const projectsInfosFormatted = lastProjects.map(project => ({
        ...project,
        created_at: formattedDate(project.created_at),
        name: capitalize(splitString(project.name, '-')[0]),
        imageDesktop: project.html_url + '/tree/main/screenshot'
      }))

      setRepositories(projectsInfosFormatted)
      console.log(projectsInfosFormatted)
    }

    projectsGitHub()
  }, [])

  const formattedDate = (date: string) =>
    format(parseISO(date), "MMMM ' de ' yyyy", { locale: ptBr })

  const splitString = (stringToSplit: string, separator: string) =>
    stringToSplit.split(separator)

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
            {repositories.map(repositorie => (
              <SwiperSlide key={repositorie.id}>
                <div className="infoProjects">
                  <span className="index">{repositorie.created_at}</span>
                  <strong>{repositorie.name}</strong>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
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
