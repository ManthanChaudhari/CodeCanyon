import React from 'react'
import Container from './Reusable/Container'

function Home() {
  return (
    <Container className="py-20">
    <div className='grid p-2 gap-x-4 lg:grid-cols-12'>
      <div className='p-2 font-outfit col-span-6 lg:col-span-3 flex justify-center  lg:justify-start lg:items-start '>
      <div>
      <div className='text-white text-xl w-36'>
        <div className='bg-gradient-to-r from-[#F87516]  to-[#5E11FF] text-transparent  bg-clip-text text-center lg:text-start'>Transform Your Website</div>
        <div className='text-center lg:text-start'>With Motion Art Effect</div>
      </div>
      </div>
      </div>
      <div className='col-span-6 lg:col-span-7'>
        <h1 className='text-center p-3 text-4xl leading-snug lg:text-left lg:text-7xl text-gray-100 lg:leading-tight font-semibold'>
        Attract Your Visitors Attention With Colorful 
        <span className='bg-gradient-to-r from-[#F87516]  to-[#5E11FF] text-transparent  bg-clip-text'>
        <span className='text-gradient'>{" "}Motion Art Effect</span>
        </span>
        </h1>
        <p className='text-gray-400 lg:text-lg text-center leading-relaxed lg:text-left'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
      </div>
      <div className='col-span-2'></div>
    </div>
    </Container>
  )
}

export default Home
