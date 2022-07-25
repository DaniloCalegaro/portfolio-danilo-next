import { ContainerContact } from '../styles/stylesContact'

export default function Contact() {
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
        <form>
          <label>Form Contato</label>
        </form>
      </div>
    </ContainerContact>
  )
}
