import React from 'react';

const Card = ({ robot }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3">
      <img
        src={`https://robohash.org/${robot.id}?size=200x200`}
        alt={robot.name}
      />
      <div>
        <h2>J{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};

export default Card;
