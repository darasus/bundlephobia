import React from 'react'
import Head from 'next/head'
import '../stylesheets/index.scss'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title key="title">Bundlephobia ❘ cost of adding a npm package</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
