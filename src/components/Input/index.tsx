import { ContainerInput } from './styles'

interface InputPros extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
  labelValue?: string
}

export function Input({ id, labelValue, ...rest }: InputPros) {
  return (
    <ContainerInput>
      <label htmlFor={id}>{labelValue}</label>
      <input id={id} {...rest}></input>
    </ContainerInput>
  )
}
