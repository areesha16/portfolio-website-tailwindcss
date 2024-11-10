import React from 'react'

import Image from 'next/image'


const page = () => {
  return (
    <div className='bg-gradient-to-b from-black to-purple-700 sm:block'>

    <div className='   max-w-[1000px] mx-auto flex flex-col lg:flex-row text-black/70 p-8
    rounded-lg space-y-0 lg:space-x-8 id="contact'>

      <div className='flex justify-center items-center'>
      <ul className='space-y-4'>
        <li className='flex items-center'>
            <Image className='w-auto mr-6'
            src="/phone.png"
            alt="phone"
            width={110}
            height={110}
            />
            <p className='text-xl '> +0000 00000 000</p>
        </li>
        <li className='flex items-center'>
            <Image className='w-auto mr-6'
            src="/mail.png"
            alt="mail"
            width={110}
            height={110}
            />
            <p className='text-xl '> areeshashad@gmail.com</p>
        </li>
      </ul>
      </div>

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
      <h2 className='text-5xl font-bold text-orange-500 mb-4'>Lets Connect</h2>
      <p className='text-white/70 mb-6'>Send me a message and schedule a call</p>
      <form className='space-y-4' action= "https://getform.io/f/blllyreb" method="POST" >
        <div className='grid md:grid-cols-2 gap-4'>
            <input  type="text" name="name"className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='First Name'/><br />
            <input  type="text" name="name"className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name'/><br />
            <input type="text" name="email" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='E-mail'/><br />
            <input type="phone" name="phone"className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone'/>
        </div>
        <textarea className='bg-black/70  w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message' />
        <button className='bg-pink-700 hover:bg-pink-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl' >Send Message</button>
      </form>
      </div>
    </div>
            </div>
  )
}

export default page
