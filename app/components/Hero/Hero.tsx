import React from 'react'
import Aside from './Aside'
import Image from 'next/image'
import bg from '../../assets/bg.svg'
import Avatar from '../../assets/4.png'

const Hero = () => {
  return (
    <div className='flex gap-20 justify-center items-end mt-10'>
      <Aside />
      <div className=''>
        <Image src={bg} alt="My Image" width={500} height={300} className="absolute top-5 right-5" />
        <Image src={Avatar} alt="My Image" width={300} height={150} className="transform scale-x-[-1] relative" />
      </div>
    </div>
  )
}

export default Hero