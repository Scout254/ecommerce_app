import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-100 py-6 md:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
    <div className="mb-6 md:mb-0">
      <p className="text-sm text-gray-600">Drop your email to get updates from us</p>
      <div className="flex mt-2">
        <input type="text" className="w-full py-2 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email address"/>
        <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Subscribe</button>
      </div>
    </div>
    <div className="flex space-x-4 mb-6 md:mb-0">
      <ul className="text-gray-600 space-x-4">
        <li className="text-sm"><header className="text-gray-800 font-semibold">Product links</header></li>
        <li><a href="#categories" className="hover:text-blue-600">Categories</a></li>
        <li><a href="#popular" className="hover:text-blue-600">Popular</a></li>
        <li><a href="#featured" className="hover:text-blue-600">Featured</a></li>
        <li><a href="#arrivals" className="hover:text-blue-600">New Arrivals</a></li>
      </ul>
      <ul className="text-gray-600 space-x-4">
        <li className="text-sm"><header className="text-gray-800 font-semibold">About</header></li>
        <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
        <li><a href="#" className="hover:text-blue-600">About Us</a></li>
      </ul>
    </div>
    <div className="flex space-x-4">
      <h1 className="text-gray-800 font-semibold">Social Links</h1>
     <a href="https://www.instagram.com/_skanga_">
     <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" className="w-6 h-6"/>
     </a>
     <a href="https://twitter.com/skanga_">
     <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" className="w-6 h-6"/>
     </a>
      <a href="https://www.facebook.com/scoutskanga">
      <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" className="w-6 h-6"/>
      </a>
    </div>
  </div>
</div>



  )
}

export default Footer