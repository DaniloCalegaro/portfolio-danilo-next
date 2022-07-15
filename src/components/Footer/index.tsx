import {
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo
} from 'phosphor-react'

import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <div className="contacts">
        <strong>Contato</strong>
        <p>
          Sinta-se à vontade para entrar em contato comigo a qualquer momento
        </p>

        <ul>
          <li>
            <i>
              <Envelope />
            </i>
            <a href="mailto:danilo.calegaro@hotmail.com">
              danilo.calegaro@hotmail.com
            </a>
          </li>
          <li>
            <i>
              <WhatsappLogo />
            </i>
            <span>+55 (16) 98240-3926</span>
          </li>
        </ul>
      </div>

      <div className="socialNetworks">
        <strong>Siga-me</strong>
        <ul>
          <li>
            <i>
              <LinkedinLogo />
            </i>
            <a href="https://www.linkedin.com/in/danilo-calegaro/">Linkedin</a>
          </li>
          <li>
            <i>
              <InstagramLogo />
            </i>
            <a href="https://www.instagram.com/DaniloCalegaro/">Instagram</a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
