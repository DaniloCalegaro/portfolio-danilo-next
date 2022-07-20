import { motion, Variants } from 'framer-motion'
import { fadeUp } from '../../motion/variants'

import { ContainerInitial } from './styles'

export function Initial() {
  return (
    <ContainerInitial>
      <motion.div
        className="info"
        variants={fadeUp}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.span variants={fadeUp}>Danilo Calegaro</motion.span>
        <motion.h1 className="title" variants={fadeUp}>
          Desenvolvedor Front End
        </motion.h1>
        <motion.p variants={fadeUp}>
          Nos últimos 15 anos como designer de produto e a agora como
          desenvolvedor front-end
        </motion.p>
        <motion.div className="details" variants={fadeUp}>
          <p>
            <a>
              <strong>Ver Projetos</strong>
            </a>
            ou
            <a>
              <strong>Leia Sobre Mim</strong>
            </a>
          </p>
        </motion.div>
      </motion.div>

      <div className="imgProfile">
        {/* <img src="/images/bg_home.png" alt="foto Danilo" /> */}
      </div>

      <div className="backgroundDev">
        <strong>developer</strong>
      </div>
    </ContainerInitial>
  )
}
