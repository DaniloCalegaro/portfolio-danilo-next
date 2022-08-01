import { motion } from 'framer-motion'
import Link from 'next/link'

import { ArrowRight } from 'phosphor-react'
import { fadeIn } from '../../motion/variants'

import { ContainerNeedDeveloper } from './styles'

export function NeedDeveloper() {
  return (
    <ContainerNeedDeveloper
      id="needDeveloper"
      variants={fadeIn('up')}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.span className="index" variants={fadeIn('up')}>
        Precisa de um desenvolvedor?
      </motion.span>
      <Link href="/contact">
        <motion.a href="/contact" className="title" variants={fadeIn('up')}>
          Vamos trabalhar juntos <ArrowRight size={50} />
        </motion.a>
      </Link>
    </ContainerNeedDeveloper>
  )
}
