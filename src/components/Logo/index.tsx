import { ContainerLogo } from './styles'

interface LogoProps {
  isBaseDark?: boolean
}

export function Logo({ isBaseDark = false }: LogoProps) {
  return (
    <ContainerLogo isBaseDark={isBaseDark}>
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
