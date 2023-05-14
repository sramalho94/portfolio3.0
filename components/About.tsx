'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        src="/Profile.jpg"
        transition={{ duration: 1.2 }}
        initial={{ x: -200, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-32 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:mt-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#695E93]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base md:text-lg">{`I'm Stephan D. Ramalho, a Queens-based Fullstack Software Engineer. Starting with a history degree from Fordham University, and transitioning through a customer-focused sales role, I found my passion in software engineering at General Assembly. Now a freelance developer, I prioritize user-friendly applications and teamwork. Away from coding, I delve into PC and PS5 gaming, enhancing my creative approach to tech solutions. I'm eager to bring my unique experience and passion to future collaborations.`}</p>
      </div>
    </motion.div>
  )
}

export default About
