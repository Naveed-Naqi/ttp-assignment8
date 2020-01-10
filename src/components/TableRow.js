import React from "react";
import "./SingleCell.css";

export default function TableRow({cols}) {

  return (
    <div>
      {cols.map( (elem) => {
        return elem
      })}
    </div>
  );
}
