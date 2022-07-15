import { AboutMe } from '../components/AboutMe'
import { ButtonContactMe } from '../components/Buttons/ButtonContactMe'
import { ButtonScroll } from '../components/Buttons/ButtonScroll'
import { ButtonUp } from '../components/Buttons/ButtonUp'
import { Initial } from '../components/Initial'
import { ProjectsSelected } from '../components/ProjectsSelected'
import { Container } from './style'

export default function Home() {
  return (
    <Container>
      <Initial />
      <AboutMe />
      <ProjectsSelected />

      <section className="buttonsControl">
        {/* <div className="btnContactMe">
          <ButtonContactMe />
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
