import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  console.log('session: ', session)

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
