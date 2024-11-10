import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <div className='max-w-[1200ox] mx-auto id=about absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500  animate-gradient-xy '>
<Navbar />
      <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4'>About 
        <span className='text-purple-700'>Me</span></h1>
        <div className=' px-6 md:p-0 grid md:grid-cols-8  gap-6 place-items-center '>

            <div className=' w-full md:col-span-5 relative bg-white/10 back-drop-blur-lg border border-white/20 roundeed-xl overflow-hidden '>
            <div className=''>
            </div>
            <div className='flex flex-row p-6'>
              <Image className=''
              src="/book.png"
              alt="book"
              width={100}
              height={130}
              />
              <div className='flex flex-col mt-4 '>
                <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                <p className='text-lg text-white/70 mt-2 '> I am currently studying in University and I am focusing on technologies like React 
                ,Nextjs and Tailwind CSS</p>
              </div>
              </div>
        </div > 
        <div className='w-full md:col-span-3 relative bg-white/10 back-drop-blur-lg border border-white/20 roundeed-xl overflow-hidden '>
            <div className='flex flex-row p-6'>
              <Image className=''
              src="/pc.png"
              alt="pc"
              width={100}
              height={130}
              />
              <div className='flex flex-col mt-4 '>
                <h2 className='text-2xl font-bold text-white/80'>Problem-Solving</h2>
                <p className='text-lg text-white/70 mt-2 '>I approach challenges with logical and systematic mindset</p>
              </div>
              </div>
        </div > 

        <div className='w-full md:col-span-3 relative bg-white/10 back-drop-blur-lg border border-white/20 roundeed-xl overflow-hidden '>
            <div className='flex flex-row p-6'>
              <Image className=''
              src="/card.png"
              alt="card"
              width={100}
              height={130}
              />
              <div className='flex flex-col mt-4 '>
                <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                <p className='text-lg text-white/70 mt-2 '>I have done a few projects like 2 website using tailwindcss ,Resume Builder and Portfolio website</p>
              </div>
              </div>
        </div > 

        <div className='w-full md:col-span-5 relative bg-white/10 back-drop-blur-lg border border-white/20 roundeed-xl overflow-hidden '>
            <div className='flex flex-row p-6'>
              <Image className=''
              src="/finance.png"
              alt="finance"
              width={100}
              height={130}
              />
              <div className='flex flex-col mt-4 '>
                <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                <p className='text-lg text-white/70 mt-2 '>I am learning Full Stack Web Developing </p>
              </div>
              
              </div>
        </div > 

    

    

    </div>
    
              </div>
  )
}

export default About
