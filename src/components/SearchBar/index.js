import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="language">Search Users:</label>
          <input
            value={props.value}
            onChange={props.handleInputChange}
            name="term"
            list="term"
            type="text"
            className="form-control"
            placeholder="Filter By Last Name"
            id="term"
          />
        </div>
      </form>
    );
  }



export default SearchBar;
