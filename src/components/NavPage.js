import React from "react";
import "./NavPage.css";
import Navbar from "./Navbar";

function NavPage() {
  return (
    <>
      <div className="navpage-container">
        <div className="navbar-get">
          <Navbar />
        </div>
        <video src="./video-4.mp4" autoPlay pause muted />
      </div>
      <div className="main-snippet">

            <div className="h1-1">Solutions</div>
            <div className="h1-2">Are </div>
            <div className="h1-3">There !</div>

        <div>
          <h3 className="h3-main">Why are you waiting for!</h3>
        </div>
      </div>
      <div className="lowpx-snippet">
        <h1>
          Solutions <br /> Are <br /> There
        </h1>
        <h3>Why are you waiting for!</h3>
      </div>
      <div className="getStart">
        <button className="getStartButton">Get Start</button>
        <button className="locationButton">Location</button>
      </div>
    </>
  );
}

export default NavPage;
