import React from "react";
import "./SingleCell.css";

export default function TableRow({cols}) {

  return (

    <tr>
      {cols.map( (elem) => {
        return elem
      })}
    </tr>
  );
}
