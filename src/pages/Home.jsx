import React from 'react'
import { Banner, Categories, Featured, Footer, Navbar, NewArrivals, NewsLetter, Popular, SummerCollections } from '../components'

const Home = () => {
  return (
    <div>
        
        <Banner/>
        <Categories/>
        <NewArrivals/>
        <Featured/>
        <SummerCollections/>
        <Popular/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home