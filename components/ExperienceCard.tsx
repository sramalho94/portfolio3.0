'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] space-x-5 snap-center">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/logo.png"
        alt="logo"
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[150px] xl:h-[200px} object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-4xl font-light ">
          Fullstack Software Engineer
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">Freelance</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          {/* <Image className="h-10 w-10 rounded-full"/> */}
        </div>
        <p className="uppercase py-5 text-purple-haze">
          Started Worked.... - Ended....
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard