import React from 'react'
import data from '../constants/data'
const NewsLetter = () => {
  const {letter} = data;
  return (
    <div className="bg-gray-100 py-12 md:py-16">
  <div className="container mx-auto px-4 md:px-8">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">NewsLetter</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {letter.map((item) => (
        <div key={item.id} className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out ">
          <img src={item.image} alt="" className="  lg:h-[80px] w-[80px] " />
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 font-medium mb-4">{item.desc}</p>
           
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default NewsLetter