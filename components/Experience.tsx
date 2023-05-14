'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-x-scroll flex-col text-left md:flex-row max-w-full  justify-evenly mx-auto items-center scrollbar-track-purple-haze/20 scrollbar-thumb-port-purple/20"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory">
        {/* experience cards */}
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experience
