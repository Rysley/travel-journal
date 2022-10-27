import React from "react";
import Card from "./Card";
//import Photo1 from "../images/fuji.jpg";
import travelLogs from "../data/travelLogs";

function renderCards(logsArr) {
  const cards = logsArr.map((log, i) => <Card key={i} log={log} />);
  console.log(cards);
  return cards;
}

renderCards(travelLogs);

export default function LogColumn() {
  return <div className="log--container">{renderCards(travelLogs)}</div>;
}
