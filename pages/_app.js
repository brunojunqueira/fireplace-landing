import Head from 'next/head'
import '../styles/globals.scss'
import sources from './sources.json'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      {sources?.map((source, index) => (
        <link key={index} href={source.href} rel={source.rel} />
      ))}
    </Head>
    <Component {...pageProps} />
  </>
)


export default MyApp
