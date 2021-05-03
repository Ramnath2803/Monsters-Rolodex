import React from 'react'
import "./searchstyle.css"

export const SearchField = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="form-control mt-4 mb-4 search mx-auto"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        width="50%"
      />
    </div>
  );
};