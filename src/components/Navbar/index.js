import React from "react";
import Searchbar from "../SearchBar";
import "./style.css";


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      
      <div>
        <Searchbar users={props.user} handleInputChange={props.handleInputChange}/>
      </div>
    </nav>
  );
}

export default Navbar;
