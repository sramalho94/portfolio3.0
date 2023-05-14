import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semi-bold text-center flex flex-col">
          {`Let's collaborate.`}{' '}
          <span className="underline decoration-[#695E93]/50">{`Connect here.`}</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-purple-haze h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1-646-842-6099</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-purple-haze h-7 w-7 animate-pulse" />
            <p className="text-2xl">stephanramalho@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-purple-haze h-7 w-7 animate-pulse" />
            <p className="text-2xl">Astoria, Queens</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>

          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Message" className="contactInput" />
          <button className="bg-purple-haze py-5 px-10 rounded-md text-ebony font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
