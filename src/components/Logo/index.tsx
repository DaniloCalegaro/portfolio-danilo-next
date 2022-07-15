import { Container } from './styles'

export function Logo() {
  return (
    <Container>
      <div className="logo">
        <strong>DC</strong>
      </div>
      <div className="info">
        <strong>Danilo Calegaro</strong>
        <span>Front-end developer</span>
      </div>
    </Container>
  )
}
