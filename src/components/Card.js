import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  props = props.log;
  return (
    <div className="card">
      <div className="card--image">
        <img src={props.imageUrl} alt={props.title}></img>
      </div>
      <div className="card--content">
        <div className="card--location">
          <FontAwesomeIcon
            className="card--location-icon"
            icon={faLocationDot}
          />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
            <small>View on Google Maps</small>
          </a>
        </div>
        <h1>{props.title}</h1>
        <h5>
          {props.startDate} - {props.endDate}
        </h5>
        <p className="card--paragraph">{props.description}</p>
      </div>
    </div>
  );
}
