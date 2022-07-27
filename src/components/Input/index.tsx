import React, { FC, forwardRef } from 'react'
import { ContainerInput } from './styles'

export type InputType = 'text' | 'email' | 'password'

export type InputProps = {
  id: string
  name: string
  label?: string
  type?: InputType
  placeholder?: string
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type = 'text', placeholder, ...props }, ref) => {
    return (
      <ContainerInput>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </ContainerInput>
    )
  }
)
