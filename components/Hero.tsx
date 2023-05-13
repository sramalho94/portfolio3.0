'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
    <div>
      {/* BackgroundCircles */}
      <span>{text}</span>
      <Cursor cursorColor="#BEAFC2" />
    </div>
  )
}

export default Hero
