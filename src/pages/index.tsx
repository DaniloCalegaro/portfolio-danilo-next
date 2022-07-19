import { motion, useScroll, useSpring } from 'framer-motion'
import { AboutMe } from '../components/AboutMe'
import { ButtonRedirect } from '../components/Buttons/ButtonRedirect'
import { ButtonScroll } from '../components/Buttons/ButtonScroll'
import { ButtonUp } from '../components/Buttons/ButtonUp'
import { Copyright } from '../components/Copyright'
import { Initial } from '../components/Initial'
import { NeedDeveloper } from '../components/NeedDeveloper'
import { ProjectsSelected } from '../components/ProjectsSelected'
import { Container } from './style'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Container>
      <motion.div className="progress-bar" style={{ scaleX }} />
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
