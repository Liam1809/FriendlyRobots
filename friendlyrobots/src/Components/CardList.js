import React, { Fragment } from "react";
import Card from "../Components/Card";

const CardList = ({ robots }) => {
  const cardArrays = robots.map((robot) => (
    <Card id={robot.id} name={robot.name} email={robot.email} />
  ));

  return <Fragment>{cardArrays}</Fragment>;
};

export default CardList;
