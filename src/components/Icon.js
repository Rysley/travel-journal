import React from "react";
import icons from "../images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";
 */

export default function Icon() {
  return <FontAwesomeIcon className="header--icon" icon={icons[0]} />;
}

//<FontAwesomeIcon className="header--icon" icon={icons[0]} />
