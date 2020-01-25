import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="char-list">
        <CardTitle>Name: {props.name}</CardTitle>
        <CardSubtitle>Species: {props.species}</CardSubtitle>
        <CardSubtitle>Gender: {props.gender}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default CharacterCard;