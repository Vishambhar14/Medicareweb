import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ImCancelCircle } from 'react-icons/im'
import { TiThMenu } from 'react-icons/ti'
import "./Navigate.css"

function Navigate() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <img src="./Image/Oval L.png" alt="" width='200px'/>
        <div className="nav-container">

          <div className="nav-logo">
            <img src="./Image/MediCare+.png" alt="" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                News
              </NavLink>
            </li>
            <button className="navbar-button">Contact</button>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
            <h3>{click ? <TiThMenu /> : <ImCancelCircle />}</h3>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigate;