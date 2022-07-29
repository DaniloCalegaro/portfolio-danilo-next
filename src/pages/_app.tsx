import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Copyright } from '../components/Copyright'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Wait } from '../components/Wait'

import GlobalStyles from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Danilo - Developer</title>
      </Head>
      <GlobalStyles />
      <Wait />

      <Header />
      <Component {...pageProps} />
      <Footer />
      <Copyright />
    </>
  )
}
