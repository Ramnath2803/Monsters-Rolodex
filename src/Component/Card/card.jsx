import React from "react";
import "./cardstyle.css";

export const Card = (props) => {
  return (
    <div className="container">
      <div className="card h-100">
        <img
          src={`https://robohash.org/{props.monster.id}?set=set2`}
          alt={props.monster.name}
        ></img>
        <div className="card-body">
          <h1>{props.monster.name}</h1>
        </div>
      </div>
    </div>
  );
};
