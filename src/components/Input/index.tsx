import React, { FC, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { ContainerInput } from './styles'

export type InputType = 'text' | 'email' | 'password'

export type InputProps = {
  id: string
  name: string
  label?: string
  type?: InputType
  placeholder?: string
  error?: FieldError
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type = 'text', placeholder, error, ...props }, ref) => {
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
        {error && <span>{error.message}</span>}
      </ContainerInput>
    )
  }
)

Input.displayName = 'Input'

export default Input
