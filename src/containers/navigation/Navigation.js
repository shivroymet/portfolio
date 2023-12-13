
import "./Navigation.css"
import React from 'react';
import { Link , useMatch, useResolvedPath} from "react-router-dom";

function Navbar() {


  return (
    <>
    <div className="navbar-div">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand brand">PORTFOLIO</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={useMatch({ path: useResolvedPath("/").pathname, end:true}) ? 'active':''}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={useMatch({ path: useResolvedPath("/contact").pathname, end:true}) ? 'active':''}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </nav></div>
      </>
  );
}

export default Navbar;