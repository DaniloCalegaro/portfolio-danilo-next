import { AnimatePresence, useCycle, motion } from 'framer-motion'
import { List, X } from 'phosphor-react'
import { moveMenu, moveMenuItemVariants } from '../../motion/variants'
import { Logo } from '../Logo'
import { ContainerMenuSideBar } from './styles'

export function Menu() {
  const [open, cycleOpen] = useCycle(false, true)

  function handleOpenMenu() {
    document.body.style.overflowY = open ? 'scroll' : 'hidden'
    cycleOpen()
  }

  return (
    <ContainerMenuSideBar>
      <a onClick={handleOpenMenu}>
        <span className="index">Menu</span>
        <i>
          <List size={25} />
        </i>
      </a>

      <main>
        <AnimatePresence>
          {open && (
            <motion.nav
              variants={moveMenu}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="header"
                initial="closed"
                animate="open"
                exit="closed"
                variants={moveMenuItemVariants}
              >
                <Logo isBaseDark />
                <a className="index" onClick={handleOpenMenu}>
                  Fechar
                  <i>
                    <X size={25} />
                  </i>
                </a>
              </motion.div>
              <motion.span
                className="index"
                initial="closed"
                animate="open"
                exit="closed"
                variants={moveMenuItemVariants}
              >
                MENU
              </motion.span>
              <motion.ul
                onClick={handleOpenMenu}
                initial="closed"
                animate="open"
                exit="closed"
                variants={moveMenuItemVariants}
              >
                <li>
                  <a href="/#header">Início</a>
                </li>
                <li>
                  <a href="/#aboutMe">Sobre Mim</a>
                </li>
                <li>
                  <a href="/#projects">Projetos</a>
                </li>
                <li>
                  <a href="/#needDeveloper">Contato </a>
                </li>
              </motion.ul>
              <motion.footer
                initial="closed"
                animate="open"
                exit="closed"
                variants={moveMenuItemVariants}
              >
                <p>
                  © 2022 Danilo Calegaro. Feito com ♥ em Batatais - SP, Brasil.
                </p>
              </motion.footer>
            </motion.nav>
          )}
        </AnimatePresence>
      </main>
    </ContainerMenuSideBar>
  )
}
