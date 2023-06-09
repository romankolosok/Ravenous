import React from "react";

export default function Business(props){
    return (
        <div className="business">
            <img src={props.data.imageSrc} alt="image"/>
            <h4 className="business-name">{props.data.name}</h4>
            <div className="business-info">
                <div className="address">
                    <p>{props.data.address}</p>
                    <p>{props.data.city}</p>
                    <p>{`${props.data.state} ${props.data.zipCode}`}</p>
                </div>
                <div className="rating">
                    <h5>{props.data.category}</h5>
                    <h6>{`${props.data.rating} stars`}</h6>
                    <p>{`${props.data.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    )
}