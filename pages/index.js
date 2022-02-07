import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Tailwind Hardhat Template</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center flex-col h-screen">
          <h1 className="text-center text-6xl mt-10 font-semibold">Next.js + Tailwind + Hardhat 🔥</h1>
          <Button />
      </main>
    </div>
  )
}
