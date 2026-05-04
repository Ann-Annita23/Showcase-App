import React from 'react';

const SearchBar =({searchQuery, onSearchChange})=>{
    return(
        <section className="mb-4">
            <div className="input-group shadow-sm">
                <span className="input-group-text bg-white">
                    <i className="bi bi-search">🔍</i>
                </span>
                <input 
            type="text"
            className="form-control form-control-lg"
            placeholder='Search...' 
            value={searchQuery}
            onChange={(e)=> onSearchChange(e.target.value)}
            />
            </div>
        </section>
    )
 };
 export default SearchBar;