'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-screen  bg-purple-haze snap-center md:w-[600px]">
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
        <h4 className="text-4xl font-light ">Fullstack Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Freelance</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          {/* <Image className="h-10 w-10 rounded-full"/> */}
        </div>
        <p className="upper-case py-5 text-port-purple">
          Started Worked.... - Ended....
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points Summary Points Summary Points Summary Points
          </li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
