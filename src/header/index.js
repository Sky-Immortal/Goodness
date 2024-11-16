import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            <p className="logo"> GOODNESS </p>
          </Link>
          <div className="d-flex align-items-center">
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>

          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">

                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                    <span className="line"></span>
                  </li>

                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3"> Projects</Link>
                    <span className="line"></span>
                  </li>

                  <li className="menu_item">
                    <a href="/resume.pdf" download className="text_2"> 
                    <Link onClick={handleToggle} to="/" className="my-3"> Resume </Link>
                    </a>
                    <span className="line"></span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">

            <div className="d-flex">
              <a href="#">Phone </a>
              <a href="#"> Github </a>
              <a href="#"> Mail</a>
            </div>

            <p className="copyright m-0">Goodness || Portfolio</p>

          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Headermain;
