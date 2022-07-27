import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo
} from 'phosphor-react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'
import { ButtonRedirect } from '../Buttons/ButtonRedirect'

import { ContainerFooter } from './styles'

export function Footer() {
  return (
    <ContainerFooter>
      <motion.div
        className="contacts"
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <strong>Contato</strong>
        <p>
          Sinta-se à vontade para entrar em contato comigo a qualquer momento.
        </p>

        <ul>
          <li>
            <ButtonRedirect
              icon={<Envelope size={20} />}
              name="Entre em contato"
              href="https://www.linkedin.com/in/danilo-calegaro/"
              target="_blank"
              rel="noreferrer"
            />
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="socialNetworks"
        variants={fadeIn('up')}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <strong>Siga-me</strong>
        <ul>
          <li>
            <i>
              <LinkedinLogo />
            </i>
            <a
              href="https://www.linkedin.com/in/danilo-calegaro/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <i>
              <GithubLogo />
            </i>
            <a
              href="https://github.com/DaniloCalegaro"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <i>
              <InstagramLogo />
            </i>
            <a
              href="https://www.instagram.com/DaniloCalegaro/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </motion.div>
    </ContainerFooter>
  )
}
