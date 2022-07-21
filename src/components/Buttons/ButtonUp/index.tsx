import { ArrowUp } from 'phosphor-react'
import { motion, useScroll } from 'framer-motion'
import { ContainerBtnUp } from './style'
import { useEffect, useState } from 'react'
import { riseup } from '../../../motion/variants'

export function ButtonUp() {
  const { scrollY } = useScroll()
  const [positionPage, setPositionPage] = useState(0)

  useEffect(() => {
    scrollY.onChange(latest => {
      setPositionPage(latest)
    })
  }, [])

  return (
    <ContainerBtnUp href="#header">
      <motion.i
        initial={'startscreen'}
        animate={positionPage < 24 ? 'startscreen' : 'movescreen'}
        variants={riseup}
      >
        <ArrowUp size="20" weight="bold" />
      </motion.i>
    </ContainerBtnUp>
  )
}
