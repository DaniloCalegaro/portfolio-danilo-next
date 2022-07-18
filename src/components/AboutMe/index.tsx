import { ContainerAboutMe } from './styles'

export function AboutMe() {
  return (
    <ContainerAboutMe>
      <div className="wordsAbout">
        <span className="index">Algumas palavras sobre mim</span>
        <strong>
          Sou Danilo Calegaro, um desenvolvedor front-end que está
          constantemente antenado à novas tendências tecnológicas, formado em
          Sistemasde Informação, fiz cursos técnicos em Desenvolvimento Web pela
          Rocketseat, IGTI, Digital Innovation One e entre outras instituições.
        </strong>
        <span>
          Como desenvolvedor sou apaixonado em aplicar minha habilidades para
          resolver problemas, criar produtos e movido pela vontade de aprender.
          Nos meus tempos livres gosto aventuras de moto e mountain bike, além
          assistir um bom filme ou série.
        </span>
      </div>

      <div className="skillsComponent">
        <span className="index">Habilidades e competências</span>

        <div className="skills">
          <ul>
            <li>HTML / CSS</li>
            <li>Javascript / Typescript</li>
            <li>ReactJS / NextJS</li>
            <li>SASS</li>
            <li>Chakra UI</li>
            <li>Styled Components</li>
            <li>Photoshop, CorelDraw</li>
          </ul>
        </div>
      </div>
    </ContainerAboutMe>
  )
}
