import React from 'react'

import "./layout.css" //Import Style

//Global Components
import TopBar from './TopBar'
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
        <TopBar />
        { children }
        <Footer />
    </>
  )
}

export default Layout