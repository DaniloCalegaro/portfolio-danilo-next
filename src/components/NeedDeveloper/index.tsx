import { ArrowRight } from 'phosphor-react'

import { Container } from './styles'

export function NeedDeveloper() {
  return (
    <Container>
      <span className="index">Precisa de um desenvolvedor?</span>
      <strong className="title">
        Vamos trabalhar juntos? <ArrowRight size={50} />
      </strong>
    </Container>
  )
}
