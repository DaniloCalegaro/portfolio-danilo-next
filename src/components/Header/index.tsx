import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

import { Logo } from '../Logo'
import { ContainerHeader } from './styles'
import { List } from 'phosphor-react'
import { Menu } from '../Menu'

export function Header() {
  return (
    <ContainerHeader>
      <motion.div
        id="header"
        variants={fadeIn('down')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <Logo />
        <Menu />
        {/* <ul className="menu">
          <li>
            <strong>MENU</strong>
            <a>
              <List size="30" />
            </a>
          </li>
        </ul> */}
      </motion.div>
    </ContainerHeader>
  )
}
