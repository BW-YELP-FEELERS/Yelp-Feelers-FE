import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import AdjustedRating from './AdjustedStars';

const SimpleGrid = props => {
  console.log(props)
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Business Name: {props.mod.business_name} </CardTitle>
          <CardSubtitle>Business Address: {props.mod.address} </CardSubtitle>
          <CardText>Business Review: {props.mod.original_text_review}</CardText>
          {/* <CardLink className="stars" href="#"><AdjustedRating /></CardLink> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default SimpleGrid;