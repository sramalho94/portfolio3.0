import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex-col bg-ebony text-violet snap-y snap-mandatory overflow-scroll z-0">
      {/* header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <div>
          <Hero />
        </div>
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </main>
  )
}
