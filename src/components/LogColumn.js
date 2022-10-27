import React from "react";
import Card from "./Card";
import travelLogs from "../data/travelLogs";

export default function LogColumn() {
  return (
    <div className="log--container">
      {travelLogs.map((log, i) => {
        return <Card key={i} log={log} />;
      })}
    </div>
  );
}
