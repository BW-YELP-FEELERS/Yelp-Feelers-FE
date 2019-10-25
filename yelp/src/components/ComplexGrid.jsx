import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import HoverRating from './Stars';
import AdjustedRating from './AdjustedStars';
import NAVBAR from './Mode'

const ComplexGrid = (props) => {

 
  return (
    <div>
      <NAVBAR />
      <Card>
        <CardBody>
          <CardTitle>Business Name: {props.fact.business_name} </CardTitle>
          <CardSubtitle>Business Address: {props.fact.address} </CardSubtitle>
          <CardText>Business Review: {props.fact.id}</CardText>
          <CardText>Business Review: {props.fact.original_text_review}</CardText>
          <CardLink className="star" href="#"><HoverRating /></CardLink>
          </CardBody>
          </Card>
          <Card>
            <CardBody>
              {/* <CardLink className="stars" href="#"><AdjustedRating /></CardLink> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default ComplexGrid;