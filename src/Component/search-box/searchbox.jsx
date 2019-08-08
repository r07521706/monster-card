import React from "react";
import  "./index.css";

export const SearchBox = ({placeholder,handleOnChange,state})=>(
  <div>
    <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleOnChange}
    />
  </div>
)
