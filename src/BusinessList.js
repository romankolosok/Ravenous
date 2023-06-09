import React from "react";
import Business from "./Business";

export default function BusinessList(props){
    const businessList = props.listOfBusinesses.map(element => <Business data={element}/>)
    return <div className="businesses">{businessList}</div>
}
