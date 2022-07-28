import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from 'emailjs-com'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ButtonSubmit } from '../components/Buttons/ButtonSubmit'
import Input from '../components/Input'
import Select from '../components/Select'
import { ContainerContact } from '../styles/stylesContact'
import { useState } from 'react'
import TextArea from '../components/TextArea'

type CreatMessageContact = {
  name: string
  email: string
  service: string
  message: string
}

const createNewMessageSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  service: yup.string().required('Selecione o serviço'),
  message: yup.string().required('Mensagem obrigatória')
})

export default function Contact() {
  const userID = process.env.NEXT_PUBLIC_REACT_APP_USER_ID
  const templateID = process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID as string
  const serviceID = process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID as string

  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [messageSend, SetMessageSend] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreatMessageContact>({
    resolver: yupResolver(createNewMessageSchema)
  })

  const handleCreateNewMessageContact: SubmitHandler<
    CreatMessageContact
  > = values => {
    //console.log(values)
    setIsSendingMessage(true)

    emailjs.sendForm(serviceID, templateID, '#contact-form', userID).then(
      result => {
        //console.log('Sucess...', result.text)
        setIsSendingMessage(false)
        reset()
        SetMessageSend('Mensagem enviada com sucesso!')
      },
      error => {
        console.log('Failed...', error.text)
        setIsSendingMessage(false)
        SetMessageSend('Falha ao enviar a mensagem! ❌')
      }
    )
  }

  return (
    <ContainerContact>
      <span className="index">Vamos trabalhar juntos</span>
      <strong className="title">
        Tem um projeto Front-End? Mande-me uma mensagem se você quiser trabalhar
        juntos em algo emocionante. Grande ou pequeno
      </strong>

      <div className="containerMapsAndForms">
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1863.8397398958496!2d-47.5848283420739!3d-20.88496549053462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9faec7ca0bd39%3A0x41e98b4583280ee0!2sR.%20Dr.%20Manoel%20Alves%20Pereira%2C%20422%20-%20Batatais%2C%20SP%2C%2014300-000!5e0!3m2!1spt-BR!2sbr!4v1658781727071!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
        <form
          onSubmit={handleSubmit(handleCreateNewMessageContact)}
          id="contact-form"
        >
          <div className="fields">
            <Input
              label="Seu nome"
              type="text"
              id="name"
              placeholder="Qual seu nome?"
              {...register('name')}
              error={errors.name}
            />
            <Input
              label="Seu e-mail"
              type="email"
              id="email"
              placeholder="Qual é seu e-mail?"
              {...register('email')}
              error={errors.email}
            />
            <Select
              id="service"
              label="Serviço"
              defaultValue={''}
              {...register('service')}
              error={errors.service}
            >
              <option value="" disabled>
                Em quê você está interessado?
              </option>
              <option value="projeto único">
                Preciso de ajuda com projeto único
              </option>
              <option value="parceria de longo prazo">
                Procurando uma parceria de longo prazo
              </option>
              <option value="desenvolvedor em tempo integral">
                Quer contratar um desenvolvedor em tempo integral
              </option>
              <option value="dizer oi">Só queria dizer oi!</option>
            </Select>
            <TextArea
              label="Mensagem"
              id="message"
              placeholder="Qual é a sua mensagem?"
              {...register('message')}
              error={errors.message}
            />
          </div>

          <ButtonSubmit
            type="submit"
            name={'Enviar mensagem'}
            isSendingMessage={isSendingMessage}
          />

          <strong className="alertMessage">{messageSend}</strong>
        </form>
      </div>
    </ContainerContact>
  )
}
