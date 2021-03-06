import type { AppProps } from 'next/app'
import { Copyright } from '../components/Copyright'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import GlobalStyles from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Copyright />
    </>
  )
}
