import React from 'react'
import Container from './Reusable/Container'
import FeatureCard from './Reusable/FeatureCard'
import feature1 from "../assets/motionarteffect-img9.png"
import feature2 from "../assets/motionarteffect-img6.png"
import feature3 from "../assets/motionarteffect-img7.png"
function FeatureSection() {
  return (
    <Container className=" py-16">
    <div className='flex flex-col items-center gap-y-8'>
    <div className="">
          <h1 className="text-center text-2xl lg:text-4xl font-semibold text-white">
          An All-Round Plugin With Powerful Features
          </h1>
        </div>
        <div className=" lg:w-[650px] px-7">
          <p className="text-lg text-center text-gray-400 leading-7">
          Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className='flex flex-col gap-5   lg:flex-row'>
          <FeatureCard title="Light Weight" description="Motion Art for Elementor is designed to be lightweight." imageSource={feature1}/>
          <FeatureCard title="100% Responsive" description="Create a consistent visual experience across all devices." imageSource={feature2}/>
          <FeatureCard title="User Friendly Interface" description="Ensure a smooth experience for both applicants and administrators." imageSource={feature3}/>
        </div>
    </div>
    </Container>
  )
}

export default FeatureSection
