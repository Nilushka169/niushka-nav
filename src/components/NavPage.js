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
        <video src="./video-2.mp4" autoPlay loop muted />
      </div>
      <div className="main-snippet">
        <h1 className="h1-main">Solutions Are There</h1>
        <h3 className="h3-main">Why are you waiting for!</h3>
      </div>
      <div className="lowpx-snippet">
        <h1>
          Solutions <br /> Are <br /> There
        </h1>
        <h3 >Why are you waiting for!</h3>
      </div>
      <div className="getStart">
        <button className="getStartButton">Get Start</button>
        <button className="locationButton">Location</button>
      </div>
    </>
  );
}

export default NavPage;
