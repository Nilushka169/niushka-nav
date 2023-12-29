import React, { useState } from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [ismobileLinksOpen, setIsmobileLinksOpen] = useState(false);

  const dropdownmenuclick = () => {
    setIsmobileLinksOpen(!ismobileLinksOpen);
  };
  return (
    <>
      <div
        className="navbar-container"
      >
        <div className="logo">
          <img className="imglogo" src="./logo.png" alt="" />
          <h2>
            PURE<span>-X</span>
          </h2>
        </div>
        <div className="navbarLinks">
          <ul>
            <li>
              <a href="#">
                <AiFillHome />
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <FaExclamationCircle />
                About Us
              </a>
            </li>
            <li>
              <a href="#">
                <RiProjectorFill />
                Our Projects
              </a>
            </li>
            <li>
              <a href="#">
                <IoMailOpen />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdownmenu" onClick={dropdownmenuclick}>
          {ismobileLinksOpen ? <FaWindowClose /> : <TiThMenuOutline />}
        </div>
      </div>
      <div className={ismobileLinksOpen ? "mobileLinks open" : "mobileLinks"}>
        <ul>
          <li>
            <a href="/">
              <AiFillHome />
              Home
            </a>
          </li>
          <li>
            <a href="/">
              <FaExclamationCircle />
              About Us
            </a>
          </li>
          <li>
            <a href="/">
              <RiProjectorFill />
              Our Projects
            </a>
          </li>
          <li>
            <a href="/">
              <IoMailOpen />
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
