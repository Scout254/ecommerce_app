import React from 'react';
import { useStateValue } from '../StateProvider';

const ProductDetail = () => {
 const[{details},dispatch] = useStateValue();
 console.log(details);
 const addToBasket = () => {
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: details[0].id,
      image: details[0].image,
      price: details[0].price,
      name: details[0].name,
    },
  });
};
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-8 py-[20px] px-[20px] bg-gradient-to-r from-purple-200 via-pink-400 to--400 p-8">
    {/* Large image */}
    <div className="flex-none w-full md:w-1/2 lg:w-2/5">
      <img src={details?.[0].image} alt={details?.[0].name} className="w-full object-cover object-center h-96 mb-4 md:mb-0 md:mr-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-gray-100" />
    </div>

    {/* Details */}
    <div className="flex-grow">
      {/* Price */}
      <h2 className="text-lg font-medium mb-4">{details?.[0].price}</h2>
      {/* Product name */}
      <h1 className="text-xl font-semibold mb-4">${details?.[0].name}</h1>


      {/* Add to cart button */}
      <button onClick={addToBasket} className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4">Add to cart</button>

      {/* Product description */}
      <p className="text-gray-700 mb-8">{details?.[0].description}</p>

      {/* Small images */}
      <div className="flex space-x-2 mb-8">
        <img src={details?.[0].image} alt={details?.[0].name} className="w-1/3 object-cover object-center h-24 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-gray-100" />
        <img src={details?.[0].image} alt={details?.[0].name} className="w-1/3 object-cover object-center h-24 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-gray-100" />
      </div>

      {/* Product details */}
      {/* <div className="space-y-2">
        <p><strong>Brand:</strong> {details?.[0].brand}</p>
        <p><strong>Category:</strong> {details?.[0].category}</p>
        <p><strong>Color:</strong> {details?.[0].color}</p>
        <p><strong>Size:</strong> {details?.[0].size}</p>
      </div> */}
    </div>
  </div>
  
  );
};

export default ProductDetail;
