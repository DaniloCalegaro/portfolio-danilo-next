import { ContainerInitial } from './styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

export function Initial() {
  return (
    <ContainerInitial>
      <motion.div
        className="info"
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
        <motion.div className="details" variants={fadeIn('up')}>
          <p>
            <a href="#projects">
              <strong>Ver Projetos</strong>
            </a>
            ou
            <a href="#aboutMe">
              <strong>Leia Sobre Mim</strong>
            </a>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="imgProfile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src="/images/bg_home.png" alt="foto Danilo" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="backgroundDev"
      >
        <strong>developer</strong>
      </motion.div>
    </ContainerInitial>
  )
}
