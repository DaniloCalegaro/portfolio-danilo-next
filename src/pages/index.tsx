import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AboutMe } from '../components/AboutMe'
import { ButtonRedirect } from '../components/Buttons/ButtonRedirect'
import { ButtonScroll } from '../components/Buttons/ButtonScroll'
import { ButtonUp } from '../components/Buttons/ButtonUp'
import { Copyright } from '../components/Copyright'
import { Initial } from '../components/Initial'
import { NeedDeveloper } from '../components/NeedDeveloper'
import { ProjectsSelected } from '../components/ProjectsSelected'
import { disappear, moveUp } from '../motion/variants'
import { Container } from './style'

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll()
  const [positionPage, setPositionPage] = useState(0)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    scrollY.onChange(latest => {
      //console.log('Page scroll: ', latest)
      setPositionPage(latest)
    })
  }, [])

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

        <motion.div
          className="btnScrool"
          initial={'startscreen'}
          animate={positionPage < 24 ? 'startscreen' : 'movescreen'}
          variants={disappear}
        >
          <ButtonScroll />
        </motion.div>

        <motion.div
          className="btnUp"
          initial={'startscreen'}
          animate={positionPage < 24 ? 'startscreen' : 'movescreen'}
          variants={moveUp}
        >
          <ButtonUp />
        </motion.div>
      </section>
    </Container>
  )
}
