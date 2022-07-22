import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AboutMe } from '../components/AboutMe'
import { ButtonScroll } from '../components/Buttons/ButtonScroll'
import { ButtonUp } from '../components/Buttons/ButtonUp'
import { Initial } from '../components/Initial'
import { NeedDeveloper } from '../components/NeedDeveloper'
import { ProjectsSelected } from '../components/ProjectsSelected'
import { Container } from './styles'

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll()
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
        <div className="btnScrool">
          <ButtonScroll />
        </div>

        <div className="btnUp">
          <ButtonUp />
        </div>
      </section>
    </Container>
  )
}
