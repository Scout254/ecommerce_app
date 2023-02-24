import React from 'react'
import data from '../constants/data'
import { useNavigate } from 'react-router-dom';
const Categories = () => {
  const{categories} = data;
 
  return (
    <div className='mt-[250px] mb-12 px-4 md:px-8' >
      
  <div className='flex flex-col md:flex-row md:justify-between items-center' id='categories'>
    {categories.map((item)=>(
      <div key={item.id} className='flex flex-col items-center md:w-1/4 lg:w-[80px] lg:h-[80px] hover:scale-105 hover:bg-blue-100 transition duration-300 ease-in-out'>
        <img src={item.image} alt="" className='w-full md:h-96 object-cover object-center hover:opacity-75 transition duration-300 ease-in-out'/>
        <h2 className='text-2xl mt-4 md:mt-6'>{item.name}</h2>
      </div>
    ))}
  </div>
</div>

  

  
  )
}

export default Categories