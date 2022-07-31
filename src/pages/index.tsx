import { AboutMe } from '../components/AboutMe'
import { ButtonScroll } from '../components/Buttons/ButtonScroll'
import { ButtonUp } from '../components/Buttons/ButtonUp'
import { Initial } from '../components/Initial'
import { NeedDeveloper } from '../components/NeedDeveloper'
import { ProjectsSelected } from '../components/ProjectsSelected'
import { ContainerIndex } from '../styles/stylesIndex'

export default function Home() {
  return (
    <ContainerIndex>
      <Initial />
      <AboutMe />
      <ProjectsSelected />
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
  )
}
