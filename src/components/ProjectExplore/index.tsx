import { GithubLogo, ArrowRight } from "phosphor-react";
import { fadeIn } from "../../motion/variants";
import {
  ContainerProjectsSelected,
  ProjectCard,
  CardContent,
  TextSection,
  ButtonContainer,
  GithubLink,
} from "./styles";

export function ProjectExplore() {
  return (
    <ContainerProjectsSelected
      id="projects"
      variants={fadeIn("up")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ProjectCard>
        <CardContent>
          <TextSection>
            <div className="tag">
              <GithubLogo size={16} weight="fill" />
              <span>Portfólio & Código</span>
            </div>
            <h2>
              Explore meu trabalho <br />
              <span>no GitHub.</span>
            </h2>
            <p>
              Confira meus repositórios e projetos pessoais. Uma visão
              aprofundada do meu estilo de código e soluções técnicas como
              Fullstack Developer.
            </p>
          </TextSection>

          <ButtonContainer>
            <GithubLink
              href="https://github.com/DaniloCalegaro?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <span>Acessar Projetos</span>
              <ArrowRight size={20} weight="bold" />
            </GithubLink>
          </ButtonContainer>
        </CardContent>
      </ProjectCard>
    </ContainerProjectsSelected>
  );
}
