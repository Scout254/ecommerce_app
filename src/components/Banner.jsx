import React from 'react'

const Banner = () => {
  return (
      <div className='relative'>
        <img src="https://th.bing.com/th/id/R.fe22c4d1f91f3ffd18cdb31925ff235e?rik=cwNxQPCuUCShYg&pid=ImgRaw&r=0" alt=""
          className='w-full object-cover' />
        <div className='absolute top-1/3 left-1/4 sm:left-1/6 lg:left-1/4 xl:left-1/3 flex flex-col gap-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-8xl'>Summer Sale</h1>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl pl-24 sm:pl-32 lg:pl-0'>50% Off</h2>
          <button className='h-16 w-44 sm:h-20 sm:w-60 lg:h-24 lg:w-72 xl:h-32 xl:w-96 bg-black text-white rounded-md hover:bg-red-400 uppercase' >Shop Now</button>
        </div>
      </div>
  )
}

export default Banner