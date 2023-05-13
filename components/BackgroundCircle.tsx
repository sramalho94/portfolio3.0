import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{ duration: 2.5 }}
    >
      <div className="absolute border border-port-purple rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="rounded-full border border-port-purple h-[300px] w-[300px] absolute" />
      <div className="rounded-full border border-port-purple h-[500px] w-[500px] absolute" />
      <div className="rounded-full border border-purple-haze opacity-20 h-[650px] w-[650px] animate-pulse" />
      <div className="rounded-full border border-port-purple h-[800px] w-[800px] absolute" />
    </motion.div>
  )
}

export default BackgroundCircle
