

"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative overflow-clip bg-gradient-to-b from-pink-400 to-purple-700 py-24'>
      
      <div className='relative'>
      <div className='text-center'>
        <motion.h1 
          className='text-8xl font-bold text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          >
          Hi, I am
        </motion.h1>
        <motion.h1
          className='text-8xl font-bold text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          >
          Areesha Shad
        </motion.h1>
      <motion.div
        className='hidden md:block absolute left-[280px] top-[170px]'
        drag
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 200 }}
        >
        <Image
          src="/cursor.png"
          alt="cursor icon"
          height={190}
          width={190}
          draggable="false"
          />
      </motion.div>

      </div>
      {/* <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] translate-x-1/2
      bg-[radial-gradient(closest-side,#000_80%,2B1942)]'>  */}

      <motion.div className=' hidden md:block absolute left-[220px] top-[20px]' 
      drag>
        <Image
        src="/lightning.png"
        alt="message"
        height={120}
        width={120} className=''
        draggable="false" />
      </motion.div>
    <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
     I am learning Full Stack developing focused on creating websites that provide the best experience for users
    </p>
    <Image 
    src="/image.png"
    alt="profilepic"
    width={300}
    height={300}
    className="h-auto w-auto mx-auto  "
    />
    </div>
    </div>

    // </div>
  )
}

export default Hero

