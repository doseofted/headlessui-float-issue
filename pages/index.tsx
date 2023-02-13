import Head from 'next/head'
import { Floating } from '@/components/Float'

export default function Home() {
  return (
    <>
      <Head>
        <title>Headless / Float Issue</title>
      </Head>
      <main>
        <Floating />
      </main>
    </>
  )
}
