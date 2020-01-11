//jshint esversion: 7
import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  //function component used to get some properties and returns some HTML
  <input
    className="search"
    type="search"
    placeholder={placeholder} // remove text and make dynamic so this can be passed in.
    onChange={handleChange}
  />
);
