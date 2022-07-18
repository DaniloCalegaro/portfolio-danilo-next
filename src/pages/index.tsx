import { AboutMe } from '../components/AboutMe'
import { ButtonRedirect } from '../components/Buttons/ButtonRedirect'
import { ButtonScroll } from '../components/Buttons/ButtonScroll'
import { ButtonUp } from '../components/Buttons/ButtonUp'
import { Initial } from '../components/Initial'
import { NeedDeveloper } from '../components/NeedDeveloper'
import { ProjectsSelected } from '../components/ProjectsSelected'
import { Container } from './style'

export default function Home() {
  return (
    <Container>
      <Initial />
      <AboutMe />
      <ProjectsSelected />
      <NeedDeveloper />

      <section className="buttonsControl">
        {/* <div className="btnContactMe">
          <ButtonRedirect />
        </div> */}
        <div className="btnScrool">
          <ButtonScroll />
        </div>
        {/* <div className="btnUp">
          <ButtonUp />
        </div> */}
      </section>
    </Container>
  )
}
