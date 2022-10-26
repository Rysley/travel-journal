import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";

const rotateIcon = function () {
  const earthSides = [
    "faEarthAmericas",
    "faEarthAfrica",
    "faEarthAsia",
    "faEarthOceania",
  ];
  setInterval(function () {
    earthSides.map((side) => side);
  }, 5000);
};


export default function Header() {
  return (
    <div className="header--container">
      <FontAwesomeIcon className="header--icon" icon={faEarthAmericas} />
      <FontAwesomeIcon className="header--icon" icon={faEarthAfrica} />
      <FontAwesomeIcon className="header--icon" icon={faEarthAsia} />
      <FontAwesomeIcon className="header--icon" icon={faEarthOceania} />
      <h3>my travel journal</h3>
    </div>
  );
}
