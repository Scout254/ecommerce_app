import React, { useEffect } from 'react'
import { Cart, Checkout, Home, Login, ProductDetail } from './pages'
import { Route, Routes } from 'react-router-dom'
import {  Navbar } from './components'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'

const App = () => {

  const [{user},dispatch] = useStateValue();
  
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        console.log(userAuth);
        dispatch({
          type:"SET_LOGIN",
          user:{
            uid:userAuth.uid,
            email:userAuth.email,
          }
        });
        console.log(user);
      }else{
        dispatch({
          type:"SET_LOGOUT",
          user
        })
      }
    });
    return unsubscribe;
  },[])
  return (
    <div>
      
      {!user ? (
        <Login/>
      ):(
        <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        
      </Routes>
    </div>
      )}

    
     
     
     
     
    
    </div>
  )
}

export default App