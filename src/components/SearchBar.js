import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const searchIcon = require('../images/search.png');
    const [search, setSearch] = useState('');
    let navigation = useNavigate();

    const sub = (e) => {
        e.preventDefault();
        // TODO: logic to  check if route exists
        if(search !== ''){
            // Had to route to users profile this way, navigate() would cause problems in my UrlProfile component: It does not like multiple input data. 
            window.location.replace("/" + search);
        }
    }

  return (
    <div className="nav-middle">
        <form onSubmit={(event) => {sub(event)}}>
            <div>
                <input type="text" placeholder="Search profile.." className="nav-search-bar" onChange={(e)=>{setSearch(e.target.value)}} value={search}></input>
                <button className="search-submit-btn">
                    <img src={searchIcon} alt="Logo" width="100%" height="100%" overlay="cover"></img>
                </button>
            </div>
        </form>
    </div>
  );
}

export default SearchBar;