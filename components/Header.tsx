import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start max-w-7xl z-20 justify-between">
      <div className="flex flex-row items-center">
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
      </div>
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
