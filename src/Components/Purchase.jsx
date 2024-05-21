import React from 'react'
import Container from './Reusable/Container'
import Button from './Reusable/Button'
import image5 from "../assets/motionarteffect-img5.png"

function Purchase() {
  return (
    <Container className="py-20 font-sora">
    <div className='flex flex-wrap gap-y-10'>
      <div className='flex flex-col gap-y-5 lg:w-[60%]  '>
      <div className=' '>
        <h1 className='text-3xl lg:text-4xl  text-gray-300 font-semibold text-center lg:text-left'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
      </div>
      <div>
        <p className=' text-gray-300 text-center lg:text-left'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
      </div>
      <div className='flex justify-center lg:justify-start'>
        <Button className='bg-gradient-to-r  from-[#5E11FF]  to-[#F87516] text-white py-4 px-10 rounded-2xl text-lg'>Purchase From Envato </Button>
      </div>
      </div>
      <div className='w-full lg:w-[40%] flex justify-center lg:justify-end'>
      <img src={image5} alt='magic-stick'/> 
      </div>
    </div>
    </Container>
  )
}

export default Purchase
