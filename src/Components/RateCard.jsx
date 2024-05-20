import React from 'react'
import rating from "../assets/motionarteffect-img4.png"

function RateCard({className,source,...props}) {
  return (
    <div className={`${className} flex items-center gap-x-3`}>
      <div>
        <img src = {source} alt='user-image' {...props}/>
      </div>
      <div className='flex flex-col gap-y-3'>
        <p>
         <img src = {rating} alt='rating-image'/> 
        </p>
        <p>
          <span className='text-gray-400 font-bold'>4.5 Score, 9 Reviews</span>
        </p>
      </div>
    </div>
  )
}

export default RateCard
