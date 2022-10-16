import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Protected() {
  return (
    <div className="container">
      <Head>
        <title>"Middleware Page"</title>
      </Head>

      <main>
        <Header title="This page is under a middleware" />
        <p className="description">
          Hello!
        </p>
      </main>

      <Footer />
    </div>
  )
}
