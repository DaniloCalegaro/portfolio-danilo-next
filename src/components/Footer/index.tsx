import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo
} from 'phosphor-react'
import { ButtonRedirect } from '../Buttons/ButtonRedirect'

import { ContainerFooter } from './styles'

export function Footer() {
  return (
    <ContainerFooter>
      <div className="contacts">
        <strong>Contato</strong>
        <p>
          Sinta-se à vontade para entrar em contato comigo a qualquer momento.
        </p>

        <ul>
          <li>
            <ButtonRedirect
              icon={<Envelope size={20} />}
              name="Entre em contato"
              url="/contact"
            />
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
            <a
              href="https://www.linkedin.com/in/danilo-calegaro/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <i>
              <GithubLogo />
            </i>
            <a href="https://github.com/DaniloCalegaro" target="_blank">
              Github
            </a>
          </li>
          <li>
            <i>
              <InstagramLogo />
            </i>
            <a href="https://www.instagram.com/DaniloCalegaro/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </ContainerFooter>
  )
}
