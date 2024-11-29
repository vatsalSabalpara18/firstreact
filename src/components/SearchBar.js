import React from 'react';

const SearchBar = ({ handleChange, query, handleSelectChange, selectedOption }) => {

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            <select
                className="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="">Sort Product</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
                <option value="PLH">Price (Low-High)</option>
                <option value="PHL">Price (High-Low)</option>
            </select>
        </div>
    );
};

export default SearchBar;
