import { ButtonScroll } from '../Buttons/ButtonScroll'
import { Container } from './styles'

export function Initial() {
  return (
    <Container>
      <div className="info">
        <span>Danilo Calegaro</span>
        <strong>Desenvolvedor Front End</strong>
        <p>
          Nos últimos 15 anos como designer de produto e a agora como
          desenvolvedor front-end
        </p>
        <div className="details">
          <p>
            <a>
              <strong>Ver Projetos</strong>
            </a>
            ou
            <a>
              <strong>Leia Sobre Mim</strong>
            </a>
          </p>
        </div>
      </div>

      <div className="imgProfile">
        {/* <img src="/images/bg_home.png" alt="foto Danilo" /> */}
      </div>
    </Container>
  )
}
