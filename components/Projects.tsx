'use client'

import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-purple-haze/20 scrollbar-thumb-port-purple/20">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt="image"
            />
            <div className="space-y-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#695E93]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                UPS Clone
              </h4>

              <p className="text-md md:text-lg text-center md:text-left">
                Netflix 2.0 app that has a log in and log out Netflix 2.0 app
                that has a log in and log out Netflix 2.0 app that has a log in
                and log out Netflix 2.0 app that has a log in and log out
                Netflix 2.0 app that has a log in and log out Netflix 2.0 app
                that has a log in and log out
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#BEAFC2]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
