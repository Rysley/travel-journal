import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={props.img}></img>
      </div>
      <div className="card--content">
        <div className="card--location">
          <FontAwesomeIcon
            className="card--location-icon"
            icon={faLocationDot}
          />
          <span>AUSTRALIA</span>
          <small className="grey">View on Google Maps</small>
        </div>
        <h1>Fujigen Mountain trip</h1>
        <h5>27 May, 2021 - 8 Jun, 2021</h5>
        <p className="card--paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, rerum
          quibusdam? Sapiente, quos natus tenetur distinctio, harum magnam ab
          vitae rem temporibus inventore consectetur officia error doloremque
          molestias laudantium ea. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Eos, rerum quibusdam?
        </p>
      </div>
    </div>
  );
}
