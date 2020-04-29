import React from "react";
import Card from "./card";
const CardList = ({ roboArray }) => {
  return (
    <div>
      {roboArray.map((robot, i) => {
        return <Card robot={robot} key={i} />;
      })}
    </div>
  );
};

export default CardList;
