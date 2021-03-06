import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/styles.css'
import Header from 'components/Header'
import Footer from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Genesis Assessoria</title>
        <link
          rel="shortcut icon"
          href="/img/02-genesis-logo-white-transparent.png"
        />
        <link
          rel="apple-touch-icon"
          href="/img/02-genesis-logo-white-transparent.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Genesis Assessoria - Ajudamos voce a tirar seu certificado"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
