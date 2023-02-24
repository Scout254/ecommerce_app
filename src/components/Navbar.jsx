
import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-50">
  <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 md:px-6 lg:px-8">
    <div>
      <h1 className="text-2xl lg:text-3xl">MARKET</h1>
    </div>
    <div className="flex justify-center items-center my-4 lg:my-0 lg:ml-4">
      <ul className="list-none flex gap-4 md:gap-6 lg:gap-8">
       <a href="#categories">
       <li className="cursor-pointer transition-colors duration-200 hover:text-red-400">Categories</li>
       </a>
       <a href="#arrivals">
       <li className="cursor-pointer transition-colors duration-200 hover:text-red-400">New Arrivals</li>
       </a>
        <a href="#featured">
        <li className="cursor-pointer transition-colors duration-200 hover:text-red-400">Featured</li>
        </a>
        <a href="#popular">
        <li className="cursor-pointer transition-colors duration-200 hover:text-red-400">Popular</li>
        </a>
      </ul>
    </div>
    <div className="flex items-center relative my-4 lg:my-0">
      <img
        src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
        alt=""
        className="h-4 w-4 md:h-6 md:w-6 absolute left-1 md:left-2 top-1 md:top-2 cursor-pointer transition-transform duration-200 hover:scale-110"
      />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none border-2 border-gray-500 h-10 w-28 md:w-36 lg:w-56 pl-8 md:pl-10 lg:pl-12 text-sm md:text-base transition-colors duration-200 hover:border-red-400"
      />
    </div>
    <div className="flex items-center gap-2 lg:gap-4 cursor-pointer">
      <img
        src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
        alt=""
        className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-200 hover:rotate-12"
      />
      <button className="bg-black text-white h-8 w-20 md:h-10 md:w-24 lg:w-32 cursor-pointer hover:bg-red-400 ease-in-[200ms] rounded-md transition-colors duration-200 text-xs md:text-sm">
        Login
      </button>
    </div>
  </div>
</div>
  

  )
}

export default Navbar