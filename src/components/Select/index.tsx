import { ReactNode } from 'react'
import { ContainerSelect } from './styles'

interface SelectPros extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelValue?: string
  name: string
  children: ReactNode
}

export function Select({ labelValue, name, children, ...rest }: SelectPros) {
  return (
    <ContainerSelect>
      <label>{labelValue}</label>
      <select {...rest}>{children}</select>
    </ContainerSelect>
  )
}
