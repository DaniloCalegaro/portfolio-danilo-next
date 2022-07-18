import { Logo } from '../Logo'
import { ContainerHeader } from './styles'
import { List } from 'phosphor-react'

export function Header() {
  return (
    <ContainerHeader>
      <Logo />
      <nav className="menu">
        <strong>MENU</strong>
        <a>
          <i>
            <List size="30" />
          </i>
        </a>
      </nav>
    </ContainerHeader>
  )
}
