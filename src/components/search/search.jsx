import React from 'react';
import './search.css'
const Search = (props) => {
    return ( 
        <div className="search">
            <form action="">
                <input type="search" name="search" placeholder="Search" onChange={props.change} />
            </form>
        </div>
     );
}
 
export default Search;