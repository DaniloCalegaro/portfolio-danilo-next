import type { AppProps } from 'next/app'
import Modal from 'react-modal'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Copyright } from '../components/Copyright'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { WaitModal } from '../components/Wait'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

Modal.setAppElement('#__next')

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      //console.log(`Loading: ${url}`)
      NProgress.start()
      setModalIsOpen(true)
    }
    const handleStop = () => {
      //console.log(`Complete page`)
      NProgress.done()
      wait(500, closeModal)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  const wait = async (ms: number, func: Function) => {
    await new Promise(resolve => setTimeout(resolve, ms))
    func()
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>Danilo - Developer</title>
      </Head>
      <GlobalStyles />
      <WaitModal modalIsOpen={modalIsOpen} setModalIsOpen={closeModal} />

      <Header />
      <Component {...pageProps} />
      <Footer />
      <Copyright />
    </ThemeProvider>
  )
}
