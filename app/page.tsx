import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="h-screen flex-col bg-ebony text-violet snap-y snap-mandatory overflow-scroll z-0">
      {/* header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <div>
          <Hero />
        </div>
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </main>
  )
}
