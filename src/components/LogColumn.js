import React from "react";
import Card from "./Card";
import Photo1 from "../images/fuji.jpg";

export default function LogColumn() {
  return (
    <div className="log--container">
      <Card img={Photo1} />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
