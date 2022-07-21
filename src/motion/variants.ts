import { Variants } from 'framer-motion'

export const fadeIn = (direction: 'up' | 'down' = 'up'): Variants => {
  return {
    offscreen: {
      opacity: 0,
      y: direction === 'up' ? 40 : -40
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
}

export const disappear: Variants = {
  startscreen: {
    opacity: 1
  },
  movescreen: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

export const riseup: Variants = {
  startscreen: {
    opacity: 0,
    y: 100
  },
  movescreen: {
    opacity: 0.6,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

export const moveMenu: Variants = {
  initial: { height: 0 },
  animate: {
    height: '100%',
    transition: { duration: 0.2 }
  },
  exit: {
    height: 0,
    transition: { delay: 0.3, duration: 0.3 }
  }
}

export const moveMenuItemVariants: Variants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
}
