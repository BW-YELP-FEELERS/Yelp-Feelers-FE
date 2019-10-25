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
          <CardTitle>Business Name: {props.fact.business_name} </CardTitle>
          <br></br>
          <CardSubtitle>Business Address: {props.fact.address} </CardSubtitle>
          <br></br>
          <CardText className="text-review2">Business Review:
          <br></br>
           {props.fact.original_text_review}</CardText>
          {/* <CardLink className="stars" href="#"><AdjustedRating /></CardLink> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default SimpleGrid;