import React from "react";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { FaTwitterSquare, FaSearch } from "react-icons/fa";
import './Sidebar.css'

const Nav = ({showSidebar}) => {

    let history = useHistory();

  return (
    <div className="main-nav">
      <nav className="main-nav">
      <Link Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className="logo-box">
          <FaTwitterSquare className="logo-icon" />
          <span className="logo-text">Twitter </span>
        </div>
        <ul className="nav-links">
          <li><NavLink style = {{textDecoration:'none'}} to="/">Home</NavLink></li>
          <li><NavLink style = {{textDecoration:'none'}} to="/">Latest</NavLink></li>
          <li> <NavLink style = {{textDecoration:'none'}} to="/">People</NavLink></li>
          <li> <NavLink style = {{textDecoration:'none'}} to="/">Photos</NavLink> </li>
        </ul>

        <form className="searchbar" >
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
           <i class="fa fa-search"></i>
            {/* <FaSearch /> */}
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Nav;