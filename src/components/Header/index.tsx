import { Logo } from '../Logo'
import { Container } from './styles'
import { List } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <Logo />
      <div className="menu">
        <strong>MENU</strong>
        <a>
          <i>
            <List size="30" />
          </i>
        </a>
      </div>
    </Container>
  )
}
