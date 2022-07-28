import React, { FC, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { ContainerTextArea } from './styles'

export type InputType = 'text' | 'email' | 'password'

export type InputProps = {
  id: string
  name: string
  label?: string
  placeholder?: string
  error?: FieldError
}

const TextArea: FC<InputProps> = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ id, name, label, placeholder, error, ...props }, ref) => {
    return (
      <ContainerTextArea>
        {label && <label htmlFor={id}>{label}</label>}
        <textarea
          id={id}
          ref={ref}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {error && <span>{error.message}</span>}
      </ContainerTextArea>
    )
  }
)

TextArea.displayName = 'Input'

export default TextArea
