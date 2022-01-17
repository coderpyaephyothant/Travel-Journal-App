import React from "react"
export default function Card (props) {
    return (
        <div>
        <div className="CardContainer">
            <img src={props.image} className="fuji"/>
            <div className="info-Container">
                <div className="info-FirestLine">
                <i className="fas fa-map-marker-alt location"></i>
                <span className="info-Japan">{props.location}</span>
                <a href={props.googleMapsUrl} className="info-link">View on Google Maps</a>
                </div>
                <div className="info-SecondLine">{props.title}</div>
                <div className="info-Date">
                    <span>{props.startDate} -</span>
                    <span> {props.endDate}</span>
                </div>
                    <p className="info-Paragraph">
                {props.description}
            </p>
            </div>
        </div>
        <div className="card-BorderLine"></div>  
        </div>
    )
}