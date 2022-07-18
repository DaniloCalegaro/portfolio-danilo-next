import { ArrowRight } from 'phosphor-react'

import { ContainerNeedDeveloper } from './styles'

export function NeedDeveloper() {
  return (
    <ContainerNeedDeveloper>
      <span className="index">Precisa de um desenvolvedor?</span>
      <strong className="title">
        Vamos trabalhar juntos? <ArrowRight size={50} />
      </strong>
    </ContainerNeedDeveloper>
  )
}
