import React from 'react'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';

const Cart = () => {
  const [{basket} , dispatch] = useStateValue();

  const removeFromBasket =(id) =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }
  return (
    <div className="px-4 md:px-8 lg:px-16">
  <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
  {basket.length === 0 ? (
    <p className="text-gray-500">Your cart is empty. Go add some items!</p>
  ) : (
    basket.map((item) => (
      <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
        <div className="flex items-center space-x-4 lg:w-[200px] ">
          <img src={item.image} alt="" className="w-16 h-16 object-cover object-center rounded-md" />
          <div>
            <h2 className="text-lg font-medium">{item.name}</h2>
            <h2 className="text-gray-500">${item.price}</h2>
          </div>
          
        </div>
        <div className=' items-center  gap-[20px] flex'>
          <button className="bg-gray-400 text-gray-700 rounded-md px-2" onClick={() => dispatch({ type: 'DECREASE_QUANTITY', id: item.id })}>-</button>
          <button className="bg-gray-400 text-gray-700 rounded-md px-2">{item.quantity}</button>
          <button className="bg-gray-400 text-gray-700 rounded-md px-2" onClick={() => dispatch({ type: 'INCREASE_QUANTITY', id: item.id })}>+</button>
          </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 text-gray-700 rounded-md px-2" onClick={() => dispatch({type:'REMOVE_ALL_FROM_BASKET_BY_ID',id:item.id})}>Remove</button>
        </div>
      </div>
    ))
  )}
  <div className="mt-8 flex items-center justify-between">
    <Link to="/" className="flex items-center space-x-2">
      <img src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png" alt="Arrow back" className="w-6 h-6" />
      <span>Continue Shopping</span>
    </Link>
    <button className="bg-gray-800 text-white py-2 px-4 rounded-md" onClick={() => alert('Checkout functionality is not implemented yet!')}>Checkout</button>
  </div>
</div>


  )
}

export default Cart