import React from "react";

export default function Business(props){
    return (
        <div className="business">
            <img src={props.data.image_url} alt="image"/>
            <h4 className="business-name">{props.data.name}</h4>
            <div className="business-info">
                <div className="address">
                    <p>{props.data.location.address1}</p>
                    <p>{props.data.location.city}</p>
                    <p>{`${props.data.location.state} ${props.data.location.zip_code}`}</p>
                </div>
                <div className="rating">
                    <h5>{props.data.categories[0].title}</h5>
                    <h6>{`${props.data.rating} stars`}</h6>
                    <p>{`${props.data.review_count} reviews`}</p>
                </div>
            </div>
        </div>
    )
}