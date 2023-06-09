import React from "react";

export default function SearchBar(){
    return (
        <form action="send" className="search-form">
            <ul>
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Viewed</li>
            </ul>
            <div className="search-fields">
                <input type="text" placeholder="Search Buisnesses"/>
                <input type="text" placeholder="Where?"/>
            </div>
            <button type="submit">Let's Go</button>
        </form>
    )
}