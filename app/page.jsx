import dynamic from 'next/dynamic'
import { Suspense } from 'react' 
import Hero from '../components/header/Hero'
import Loading from '../components/ui/Loading'

const Services = dynamic(() => import('../components/sections/Services'), {
  loading: () => <Loading />,
  ssr: true
})
const Contact = dynamic(() => import('../components/sections/Contact'), {
  loading: () => <Loading />,
  ssr: true
})

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <Services />
          <Contact />
        </Suspense>
      </main>
    </>
  )
}