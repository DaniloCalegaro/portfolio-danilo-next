import { ContainerLogo } from './styles'

export function Logo() {
  return (
    <ContainerLogo>
      <div className="logo">
        <strong>DC</strong>
      </div>
      <div className="info">
        <strong>Danilo Calegaro</strong>
        <span>Front-end developer</span>
      </div>
    </ContainerLogo>
  )
}
