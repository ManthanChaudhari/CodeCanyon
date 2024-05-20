import React from 'react'
import logo from "../assets/MotionArtEffect-logo.png"
import Container from './Reusable/Container'
import Button from './Reusable/Button'

function Header() {
  return (
    <Container className="py-6">
    <div className='flex items-center justify-between  w-full'>
      <div className='p-2'>
      <img src={logo} className=' w-[150px] lg:w-full'/>
      </div>
      <div className=' hidden lg:block p-2'>
       <Button className='text-black bg-white  w-44 rounded-sm hover:bg-transparent px-2 py-3  hover:text-white hover:border-white border-2'>Purchase Now</Button>
      </div>
    </div>
    </Container>
  )
}

export default Header
