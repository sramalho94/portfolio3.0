'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img src="/Profile.jpg" />
    </div>
  )
}

export default About
