import React from 'react'
import data from '../constants/data'
import {  useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const NewArrivals = () => {
  const{arrivals} = data;
  const [{details},dispatch] = useStateValue();

  const addToBasket =(id,image,price,name) =>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id,
        image,
        price,
       name,
      }
    });
    
  }

  

  const navigate = useNavigate();

  const handleViewDetails = (id, image, price, name) => {
    navigate(`/product/${id}`);
    dispatch({
      type: "SET_DETAILS",
      details: {
        id,
        image,
        name,
        price
      }
    });
  };
  return (
    <div className='mt-[200px]' id='arrivals'>
       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">New Arrival Items</h2>
    <div className="flex flex-wrap justify-center gap-8">
      
        {arrivals.map((item) => (
          <div key={item.id} className="relative border border-gray-300 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition duration-300 ease-in-out transform hover:scale-110" />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            {/* onClick={addToBasket} */}
              <button onClick={() => handleViewDetails(item.id,item.image,item.name,item.price)} className="bg-white text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                View Product
              </button>
              
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewArrivals