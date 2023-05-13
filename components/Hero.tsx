'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `import {Stephan D Ramalho} from "Queens"`,
      `touch guyWhoLovesPizza.tsx`,
      '<ButLovesToCode More />'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative">
        <BackgroundCircle />
        <h1 className="absolute inset-0 flex justify-center items-center">
          <span>{text}</span>
          <Cursor cursorColor="#BEAFC2" />
        </h1>
      </div>
    </div>
  )
}

export default Hero
