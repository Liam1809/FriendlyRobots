import React from 'react';
import Card from '../Components/Card';

const CardList = ({ robots }) => {
  //Testing ErrorBoundary
  // if (true) {
  //   throw Error("Testing ErrorBoundary");
  // }

  const cardArrays = robots.map((robot, index) => (
    <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
  ));

  return <>{cardArrays}</>;
};

export default CardList;
