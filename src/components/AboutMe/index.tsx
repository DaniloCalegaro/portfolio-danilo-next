import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variants";

import { ContainerAboutMe, ContainerskillsComponent } from "./styles";

export function AboutMe() {
  return (
    <>
      <ContainerAboutMe
        id="aboutMe"
        className="wordsAbout"
        variants={fadeIn("up")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
      >
        <motion.span className="index" variants={fadeIn("up")}>
          Algumas palavras sobre mim
        </motion.span>
        <motion.p className="text" variants={fadeIn("up")}>
          Minha trajetória começou no design, onde aprendi a observar pessoas,
          entender problemas e criar experiências significativas. Foram mais de
          15 anos desenhando produtos com foco em usabilidade, estética e
          empatia.
        </motion.p>
        <motion.p className="text" variants={fadeIn("up")}>
          Com o tempo, senti a necessidade de ir além da superfície. Foi assim
          que mergulhei no desenvolvimento full stack, unindo o olhar do
          designer à lógica da engenharia de software.
        </motion.p>
        <motion.p className="text" variants={fadeIn("up")}>
          Hoje, com formação em Sistemas de Informação, desenvolvo aplicações
          web e mobile utilizando React, React Native, .NET Core e SQL Server,
          sempre guiado pela curiosidade em explorar novas tecnologias e pela
          missão de criar produtos performáticos, organizados e agradáveis de
          usar.
        </motion.p>
        <motion.p className="text" variants={fadeIn("up")}>
          Minha formação diversa e minha experiência em diferentes áreas me
          tornaram um profissional adaptável, colaborativo e curioso. Acredito
          no aprendizado contínuo, nas boas práticas e em projetos que gerem
          impacto real — para as pessoas que usam e para os negócios que crescem
          com a tecnologia.
        </motion.p>
        <motion.p className="text" variants={fadeIn("up")}>
          Mais do que escrever código ou desenhar telas, meu propósito é
          construir soluções digitais que façam sentido, unindo design,
          tecnologia e experiência humana.
        </motion.p>
      </ContainerAboutMe>

      <ContainerskillsComponent
        className="skillsComponent"
        variants={fadeIn("up")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
      >
        <motion.span className="index" variants={fadeIn("up")}>
          Habilidades e competências
        </motion.span>

        <motion.div className="skills" variants={fadeIn("up")}>
          <ul>
            <li>React | React Native</li>
            <li>JavaScript | TypeScript</li>
            <li>HTML5 | CSS3</li>
            <li>RESTful APIs</li>
            <li>C# | .NET Core | Entity Framework</li>
            <li>SQLServer | PostgreSQL</li>
            <li>Git | Scrum | Azure DevOps</li>
          </ul>
        </motion.div>
      </ContainerskillsComponent>
    </>
  );
}
