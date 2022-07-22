import { ElementType, HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { ContainerBtnContactMe } from './style'

interface ButtonRedirectProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name?: string
  icon?: React.ReactNode
}

export function ButtonRedirect({ name, icon, ...rest }: ButtonRedirectProps) {
  return (
    <ContainerBtnContactMe>
      <a {...rest}>
        {icon}
        {name}
      </a>
    </ContainerBtnContactMe>
  )
}
