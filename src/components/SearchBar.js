import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    let navigation = useNavigate();
    const sub = (e) => {
        e.preventDefault();
        navigation("/" + search);
        setSearch('');
    }
  return (
    <div className="nav-middle">
        <form onSubmit={(event) => {sub(event)}}>
            <div>
                <input type="text" placeholder="Search profile.." className="nav-search-bar" onChange={(e)=>{setSearch(e.target.value)}} value={search}></input>
                <button className="experience-submit-btn">Search</button>
            </div>
        </form>
    </div>
  );
}

export default SearchBar;