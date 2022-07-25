import { motion } from 'framer-motion'

import { ArrowRight } from 'phosphor-react'
import { fadeIn } from '../../motion/variants'

import { ContainerNeedDeveloper } from './styles'

export function NeedDeveloper() {
  return (
    <ContainerNeedDeveloper id="needDeveloper">
      <motion.div
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.span className="index" variants={fadeIn('up')}>
          Precisa de um desenvolvedor?
        </motion.span>
        <motion.strong className="title" variants={fadeIn('up')}>
          Vamos trabalhar juntos <ArrowRight size={50} />
        </motion.strong>
      </motion.div>
    </ContainerNeedDeveloper>
  )
}
