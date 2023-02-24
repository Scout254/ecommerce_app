import React from 'react'
import data from '../constants/data'
const Featured = () => {
  const {featured} = data;
  return (
  <div className="container mx-auto px-4 md:px-8 py-8" id='featured'>
     <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">Featured Items</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {featured.map((item) => (
      <div className="border border-gray-300 rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <img src={item.image} alt={item.name} className="w-full h-64 object-cover object-center" />
        <div className="p-4">
          <h2 className="text-xl font-medium mb-2">{item.name}</h2>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">${item.price}</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add to cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Featured