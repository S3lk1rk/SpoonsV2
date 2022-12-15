import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Locations">Our Locations</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;