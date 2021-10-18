import React from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import {SidebarData} from "./SidebarData";
import './Sidebar.css'


function Sidebar({sidebar, showSidebar, user}) {
  console.log(user);

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
                <li key= {index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
            )
          })}
          <div className="showUser">
          <p>Username: {user.length > 0 && user[0].name}</p>
          <p>Email: {user.length > 0 && user[0].email}</p>
          <p>User-ID: {user.length > 0 && user[0]._id}</p>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
