import { Container } from './styles'

export function Logo() {
  return (
    <Container>
      <section className="logo">
        <strong>DC</strong>
      </section>
      <section className="info">
        <strong>Danilo Calegaro</strong>
        <span>Front-end developer</span>
      </section>
    </Container>
  )
}
