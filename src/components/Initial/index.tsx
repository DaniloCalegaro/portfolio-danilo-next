import {
  BackgroundDev,
  ContainerInitial,
  Details,
  ImgProfile,
  Info
} from './styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

export function Initial() {
  return (
    <ContainerInitial>
      <Info
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.span variants={fadeIn('up')}>Danilo Calegaro</motion.span>
        <motion.h1 className="title" variants={fadeIn('up')}>
          Desenvolvedor Front End
        </motion.h1>
        <motion.p variants={fadeIn('up')}>
          Nos últimos 15 anos como designer de produto e a agora como
          desenvolvedor front-end
        </motion.p>
        <Details variants={fadeIn('up')}>
          <p>
            <a href="#projects">
              <strong>Ver Projetos</strong>
            </a>
            ou
            <a href="#aboutMe">
              <strong>Leia Sobre Mim</strong>
            </a>
          </p>
        </Details>
      </Info>

      <ImgProfile initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img src="/images/bg_home.png" alt="foto Danilo" />
      </ImgProfile>

      <BackgroundDev initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <strong>developer</strong>
      </BackgroundDev>
    </ContainerInitial>
  )
}
