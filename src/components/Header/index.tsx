import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

import { Logo } from '../Logo'
import { ContainerHeader } from './styles'
import { Menu } from '../Menu'

export function Header() {
  return (
    <ContainerHeader
      id="header"
      variants={fadeIn('down')}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <Logo />
      <Menu />
    </ContainerHeader>
  )
}
