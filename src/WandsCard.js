import React from "react";
import {
  Card,
  CardImg,
  CardDeck,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
function WandsCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100%"
            src={props.wands.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{props.wands.core}</CardTitle>
            <CardSubtitle>{props.wands.wood}</CardSubtitle>
            <CardText>{props.wands.length}</CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
}

export default WandsCard;
