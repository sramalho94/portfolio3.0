'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `import {Stephan D Ramalho}`,
      `touch guyWhoLovesPizza.tsx`,
      '<ButLovesToCodeMore/>'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative">
        <BackgroundCircle />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Image
            src="/Profile.jpg"
            alt="profile-pic"
            className="rounded-full h-32 w-32"
            width={128}
            height={128}
          />
          <div>
            <h2 className="text-sm uppercase text-violet pt-3 tracking-[13px] md:tracking-[15px]">
              Software Engineer
            </h2>
            <h1 className="mt-4 text-3xl lg:text-4xl font-semibold px-3 md:px-10 w-[calc(100%-1rem)] md:w-2xl whitespace-pre-wrap md:whitespace-nowrap">
              <span className="mr-3 justify-center">{text}</span>
              <Cursor cursorColor="#BEAFC2" />
            </h1>
          </div>

          <div>
            <button>AAbout</button>
            <button>Experience</button>
            <button>Skills</button>
            <button>Projects</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
