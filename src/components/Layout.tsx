import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='wrapper'>
        
            <Navigation/>

            <main className='main'>
            <Outlet/>
            </main>
        
            <Footer/>
    </div>
  )
}

export default Layout