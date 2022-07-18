import { ContainerCopyright } from './styles'

export function Copyright() {
  return (
    <ContainerCopyright>
      <div className="logoCopyright">
        <strong>DC</strong>
      </div>
      <div className="infoCopyright">
        <span>© 2022 Danilo Calegaro</span>
        <p>Feito com ♥ em Batatais - SP, Brasil.</p>
      </div>
    </ContainerCopyright>
  )
}
