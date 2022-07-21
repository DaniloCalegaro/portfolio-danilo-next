import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

import { Logo } from '../Logo'
import { ContainerHeader } from './styles'
import { List } from 'phosphor-react'

export function Header() {
  return (
    <ContainerHeader>
      <motion.nav
        id="header"
        variants={fadeIn('down')}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Logo />
        <ul className="menu">
          <li>
            <strong>MENU</strong>
            <a>
              <List size="30" />
            </a>
          </li>
        </ul>
      </motion.nav>
    </ContainerHeader>
  )
}
