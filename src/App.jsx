import React from 'react'
import { Cart, Checkout, Home, Login, ProductDetail } from './pages'
import { Route, Routes } from 'react-router-dom'
import {  Navbar } from './components'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={ <Login/>}/>
      </Routes>
     
     
     
     
    
    </div>
  )
}

export default App