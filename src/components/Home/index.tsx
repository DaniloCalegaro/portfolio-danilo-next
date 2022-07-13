import { Container } from './styles'

export function Initial() {
  return (
    <Container>
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
    </Container>
  )
}
