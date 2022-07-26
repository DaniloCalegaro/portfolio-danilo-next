import { ElementType, HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { ContainerBtnContactMe } from './style'

interface ButtonSubmitProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string
  icon?: React.ReactNode
}

export function ButtonSubmit({ name, icon, ...rest }: ButtonSubmitProps) {
  return (
    <ContainerBtnContactMe>
      <button type="submit" {...rest}>
        {name}
        {icon}
      </button>
    </ContainerBtnContactMe>
  )
}
