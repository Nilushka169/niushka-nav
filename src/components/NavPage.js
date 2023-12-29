import React from "react";
import "./NavPage.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.3 }}
        >
          <h1 className="h1-main">Solutions Are There</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <h3 className="h3-main">Why are you waiting for!</h3>
        </motion.div>
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
