import { AboutMe } from "../components/AboutMe";
import { ButtonScroll } from "../components/Buttons/ButtonScroll";
import { ButtonUp } from "../components/Buttons/ButtonUp";
import { Initial } from "../components/Initial";
import { NeedDeveloper } from "../components/NeedDeveloper";
import { ProjectExplore } from "../components/ProjectExplore";
import { SEO } from "../components/SEO";
import { ContainerIndex } from "../styles/stylesIndex";

export default function Home() {
  return (
    <>
      <SEO
        title="Danilo Calegaro | Desenvolvedor Full Stack React & .NET | Portfolio"
        description="Desenvolvedor Full Stack com 15+ anos de experiência em design e 4 anos em desenvolvimento. Especialista em React, React Native, .NET Core e SQL Server."
        canonical="https://danilocalegaro.dev.br"
        keywords={[
          "desenvolvedor full stack",
          "desenvolvedor react",
          "desenvolvedor .net",
          "desenvolvedor react native",
          "programador full stack",
          "desenvolvedor typescript",
          "portfolio desenvolvedor",
          "frontend backend",
        ]}
      />
      <ContainerIndex>
        <Initial />
        <AboutMe />
        <ProjectExplore />
        <NeedDeveloper />

        <section className="buttonsControl">
          <div className="btnScrool">
            <ButtonScroll />
          </div>

          <div className="btnUp">
            <ButtonUp />
          </div>
        </section>
      </ContainerIndex>
    </>
  );
}
