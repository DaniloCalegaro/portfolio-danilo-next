import {
  BackgroundDev,
  ContainerInitial,
  Details,
  ImgProfile,
  Info,
} from "./styles";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variants";

export function Initial() {
  return (
    <ContainerInitial>
      <Info
        variants={fadeIn("up")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.span variants={fadeIn("up")}>Danilo Calegaro</motion.span>
        <motion.h1 className="title" variants={fadeIn("up")}>
          Desenvolvedor Full Stack
        </motion.h1>
        <motion.p variants={fadeIn("up")}>
          Há mais de 15 anos criando experiências e, nos últimos 4,
          transformando essas experiências em produtos digitais completos
        </motion.p>
        <Details variants={fadeIn("up")}>
          <p>
            <a href="#projects">
              <strong>Explore meu trabalho</strong>
            </a>
            ou
            <a href="#aboutMe">
              <strong>Leia Sobre Mim</strong>
            </a>
          </p>
        </Details>
      </Info>

      <ImgProfile initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img src="/images/bg_home.png" alt="foto Danilo" />
      </ImgProfile>

      <BackgroundDev initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <strong>developer</strong>
      </BackgroundDev>
    </ContainerInitial>
  );
}
