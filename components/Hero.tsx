'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import Link from 'next/link'

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
          <div className="z-20">
            <h2 className="text-sm uppercase text-violet pt-3 tracking-[13px] md:tracking-[15px]">
              Software Engineer
            </h2>
            <h1 className="mt-4 text-3xl lg:text-4xl font-semibold px-3 md:px-10 w-[calc(100%-1rem)] md:w-2xl whitespace-pre-wrap md:whitespace-nowrap">
              <span className="mr-3 justify-center">{text}</span>
              <Cursor cursorColor="#BEAFC2" />
            </h1>
          </div>

          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
