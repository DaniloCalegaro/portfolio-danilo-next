import { FC, forwardRef, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { ContainerSelect } from './styles'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  id: string
  children: ReactNode
  error?: FieldError
}

const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, name, label, placeholder, children, error, ...props }, ref) => {
    return (
      <ContainerSelect>
        {label && <label>{label}</label>}
        <select id={id} ref={ref} name={name} {...props}>
          {children}
        </select>
        {error && <span>{error.message}</span>}
      </ContainerSelect>
    )
  }
)

Select.displayName = 'Select'

export default Select
