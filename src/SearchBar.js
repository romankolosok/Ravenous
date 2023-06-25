import React, {useState} from "react";

export default function SearchBar(){
    const [filter, setFilter] = useState("best_match")
    const [term, setTerm] = useState("")
    const [location, setLocation] = useState("")

    const changeFilterHandler = ({target}) => {
        setFilter(target.value)
    }

    const changeTermHandler = ({target}) => {
        setTerm(target.value)
    }

    const changeLocationHandler = ({target}) => {
        setLocation(target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(`Searching Yelp with ${term}, ${location}, ${filter}`)
    }



    return (
        <form action="send" className="search-form" onSubmit={submitHandler}>
            <ul className="filters-list">
                <li><input type="radio" name="filter" id="best-match" value="best_match" onInput={changeFilterHandler} defaultChecked/><label htmlFor="best-match">Best Match</label></li>
                <li><input type="radio" name="filter" id="highest-rated" value="rating" onInput={changeFilterHandler}/><label htmlFor="highest-rated">Highest Rated</label></li>
                <li><input type="radio" name="filter" id="most-reviewed" value="review_count" onInput={changeFilterHandler}/><label htmlFor="most-reviewed">Most Reviewed</label></li>
            </ul>
            <div className="search-fields">
                <input onChange={changeTermHandler} type="text" placeholder="Search Buisnesses" value={term}/>
                <input onChange={changeLocationHandler} type="text" placeholder="Where?" value={location}/>
            </div>
            <button type="submit">Let's Go</button>
        </form>
    )
}