import React from 'react';
import Navbar from './navbar';
import {Outlet} from 'react-router';
import Footer from './Footer'

const Body = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body;