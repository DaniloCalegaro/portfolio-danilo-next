import { ElementType, ReactNode } from 'react'
import { ContainerBtnContactMe } from './style'

interface ButtonRedirectProps {
  name?: string
  icon?: React.ReactNode
  url?: string
}

export function ButtonRedirect({ name, icon, url }: ButtonRedirectProps) {
  return (
    <ContainerBtnContactMe>
      <a href={url}>
        {icon}
        {name}
      </a>
    </ContainerBtnContactMe>
  )
}
