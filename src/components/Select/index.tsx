import { FC, forwardRef, ReactNode } from 'react'
import { ContainerSelect } from './styles'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  id: string
  children: ReactNode
}

export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ id, name, label, placeholder, children, ...props }, ref) => {
  return (
    <ContainerSelect>
      {label && <label>{label}</label>}
      <select id={id} ref={ref} name={name} {...props}>
        {children}
      </select>
    </ContainerSelect>
  )
})
