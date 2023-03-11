import React, { useEffect, useRef } from "react";
import "./Navbar.css";
function Navbar() {
  const color = useRef();
  function scrollNav() {
    console.log(color);
  }

  return (
    <div ref={color} className="nav">
      <h2 className="name">SAKSHAM</h2>
      <ul className="list">
        <h5>
          <a href="">About</a>
        </h5>
        <h5>
          <a href="#skills">Skills</a>
        </h5>
        <h5>
          <a href="#project">Projects</a>
        </h5>
        <h5>
          <a href="#experience">Experience</a>
        </h5>
        <h5>
          <a href="#contact">Contact</a>
        </h5>
      </ul>
    </div>
  );
}

export default Navbar;
