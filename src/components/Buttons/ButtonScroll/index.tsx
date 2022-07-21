import { motion } from 'framer-motion'

import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { disappear } from '../../../motion/variants'
import { ContainerBtnScroll } from './styles'

export function ButtonScroll() {
  const { scrollY } = useScroll()
  const [positionPage, setPositionPage] = useState(0)

  useEffect(() => {
    scrollY.onChange(latest => {
      setPositionPage(latest)
    })
  }, [])
  return (
    <ContainerBtnScroll>
      <motion.div
        initial={'startscreen'}
        animate={positionPage < 24 ? 'startscreen' : 'movescreen'}
        variants={disappear}
      />
    </ContainerBtnScroll>
  )
}
