import React from "react";
import Icon from "./Icon";
/* import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";
 */

export default function Header() {
  return (
    <div className="header--container">
      <Icon />
      <h3>my travel journal</h3>
    </div>
  );
}
