import { useCycle } from 'framer-motion'
import { X } from 'phosphor-react'
import { Logo } from '../Logo'
import { ContainerMenuSideBar } from './styles'

export function Menu() {
  return (
    <ContainerMenuSideBar>
      <nav>
        <div className="header">
          <Logo isBaseDark />
          <a>
            Fechar{' '}
            <i>
              <X size={25} />
            </i>
          </a>
        </div>
        <span className="index">MENU</span>
        <ul>
          <li>
            <a href="#header">Início</a>
          </li>
          <li>
            <a href="#aboutMe">Sobre Mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#needDeveloper">Contato </a>
          </li>
        </ul>
        <footer>
          <p>© 2022 Danilo Calegaro. Feito com ♥ em Batatais - SP, Brasil.</p>
        </footer>
      </nav>
    </ContainerMenuSideBar>
  )
}
