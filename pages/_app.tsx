import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
   <Head>
     <meta name="author" content="Onyela Udochukwuka" />
        <meta name="description" content="A site for the connected awards" />
              <meta name="keywords" content="Connected awards, Techie, Tech Africa, West Africa, Tech personality" />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                  <meta property="og:image:src" content="/brief.ico" />
        <meta property="og:image" content="/rainbow.ico" />
                      <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="600" />
                          <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property="og:description" content="A site for the connected awards" />
                            <meta property="og:title" content="The connected awards" />
    <title>The Connected Awards</title>
        <link rel="shortcut icon" href="/rainbow.ico" />
    </Head>
  <Component {...pageProps} />
  </>)
}

export default MyApp
