import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variants";
import ButtonRedirect from "../Buttons/ButtonRedirect";

import { Contacts, ContainerFooter, SocialNetworks } from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";

export function Footer() {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath.startsWith("/contact")) {
    isActive = true;
  }

  return (
    <ContainerFooter>
      <Contacts
        variants={fadeIn("up")}
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
            {!isActive && (
              <Link href="/contact">
                <ButtonRedirect
                  icon={<Envelope size={20} />}
                  name="Entre em contato"
                />
              </Link>
            )}
          </li>
        </ul>
      </Contacts>

      <SocialNetworks
        className="socialNetworks"
        variants={fadeIn("up")}
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
      </SocialNetworks>
    </ContainerFooter>
  );
}
