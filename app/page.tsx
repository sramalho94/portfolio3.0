import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="h-screen flex-col bg-ebony text-violet snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
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
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  )
}
