import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

import { ContainerAboutMe, ContainerskillsComponent } from './styles'

export function AboutMe() {
  return (
    <>
      <ContainerAboutMe
        id="aboutMe"
        className="wordsAbout"
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
      >
        <motion.span className="index" variants={fadeIn('up')}>
          Algumas palavras sobre mim
        </motion.span>
        <motion.strong variants={fadeIn('up')}>
          Sou Danilo Calegaro, um desenvolvedor front-end que está
          constantemente antenado à novas tendências tecnológicas, formado em
          Sistemas de Informação, fiz cursos técnicos em Desenvolvimento Web
          pela Rocketseat, IGTI, Digital Innovation One e entre outras
          instituições.
        </motion.strong>
        <motion.span variants={fadeIn('up')}>
          Como desenvolvedor sou apaixonado em aplicar minha habilidades para
          resolver problemas, criar produtos e movido pela vontade de aprender.
          Nos meus tempos livres gosto aventuras de moto e mountain bike, além
          assistir um bom filme ou série.
        </motion.span>
      </ContainerAboutMe>

      <ContainerskillsComponent
        className="skillsComponent"
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
      >
        <motion.span className="index" variants={fadeIn('up')}>
          Habilidades e competências
        </motion.span>

        <motion.div className="skills" variants={fadeIn('up')}>
          <ul>
            <li>HTML / CSS</li>
            <li>Javascript / Typescript</li>
            <li>ReactJS / NextJS</li>
            <li>SASS</li>
            <li>Chakra UI</li>
            <li>Styled Components</li>
            <li>Photoshop, CorelDraw</li>
          </ul>
        </motion.div>
      </ContainerskillsComponent>
    </>
  )
}
