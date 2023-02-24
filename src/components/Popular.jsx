import React from 'react'
import data from '../constants/data'
const Popular = () => {
  const {popular} = data;
  return (
    <div className="bg-gray-100 py-12 md:py-16" id='popular'>
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">Popular Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {popular.map((item) => (
          <div className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 ease-in-out hover:opacity-100"></div>
              <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold text-center uppercase opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                {item.name}
              </h3>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold mb-2">${item.price}</h2>
              <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  

  )
}

export default Popular