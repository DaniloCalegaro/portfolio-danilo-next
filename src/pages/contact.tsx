import { ArrowRight } from 'phosphor-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ButtonSubmit } from '../components/Buttons/ButtonSubmit'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import { ContainerContact } from '../styles/stylesContact'

type CreatMessageContact = {
  name: string
  email: string
  service: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm<CreatMessageContact>()

  const handleCreateNewMessageContact: SubmitHandler<
    CreatMessageContact
  > = values => {
    console.log(values)
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
        <form onSubmit={handleSubmit(handleCreateNewMessageContact)}>
          <div className="fields">
            <Input
              label="Seu nome"
              type="text"
              id="name"
              placeholder="Qual seu nome?"
              {...register('name')}
            />
            <Input
              label="Seu e-mail"
              type="email"
              id="email"
              placeholder="Qual é seu e-mail?"
              {...register('email')}
            />
            <Select id="service" label="Serviço" {...register('service')}>
              <option defaultValue="" disabled>
                Em quê você está interessado?
              </option>
              <option value="unique_project">
                Preciso de ajuda com projeto único
              </option>
              <option value="long_term_partnership">
                Procurando uma parceria de longo prazo
              </option>
              <option value="developer_full-time">
                Quer contratar um desenvolvedor em tempo integral
              </option>
              <option value="say_hi">Só queria dizer oi!</option>
            </Select>
            <Input
              label="Mensagem"
              type="text"
              id="message"
              placeholder="Qual é a sua mensagem?"
              {...register('message')}
            />
          </div>

          <ButtonSubmit
            type="submit"
            name="Enviar mensagem"
            icon={<ArrowRight size={20} />}
          />
        </form>
      </div>
    </ContainerContact>
  )
}
