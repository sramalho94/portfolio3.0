'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start max-w-7xl z-20 justify-between">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="http://www.linkedin.com/in/stephan-ramalho"
          fgColor="purple"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/sramalho94"
          fgColor="purple"
          bgColor="transparent"
        />
      </motion.div>
      <div className="flex flex-row items-center text-ebony">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="purple"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-ebony">
          Get in Touch
        </p>
      </div>
    </header>
  )
}

export default Header
