import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header>
      <div>
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
    </header>
  )
}

export default Header
