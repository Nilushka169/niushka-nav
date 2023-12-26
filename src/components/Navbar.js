import React from 'react'
import './Navbar.css'; 


function Navbar() {
  return (
    <>
        <div className='navbar-container'>
          <video src='/videos/video-2.mp4' autoPlay loop muted />
        </div>
        <div className="main-snippet">
          <h1>Solutions Are There</h1>
          <h3>Why are you waiting for!</h3>
        </div>
        <div className='getStart'>
          <button className='getStartButton'>Get Start</button>
          <button className='locationButton'>Location</button>
        </div>
    </>
  )
}

export default Navbar;