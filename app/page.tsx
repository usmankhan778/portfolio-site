import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <About />
      <Contact />
    </main>
  )
}
