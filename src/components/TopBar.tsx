import React from 'react'
import {Link} from 'gatsby'

const TopBar = () => {
  return (
    <>

    <div className="hamburger-button"></div>

    <div id="logo"></div>

    <div>
      <div className="arrow"></div>
      <Link to="/services">work with us</Link>
    </div>

    <nav>

      <div className="hamburger-menu">

        <p>Menu</p>

        <hr />
      </div>

        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>

        <hr />

        <div className='socials'>
          <p>
            <a>contact@xorex.net</a> <a>Instagram</a> / <a>Twitter</a> / <a>LinkedIn</a>
          </p>
        </div>
    </nav>
    </>
  )
}

export default TopBar