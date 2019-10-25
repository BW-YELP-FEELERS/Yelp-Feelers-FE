import React, { useState } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, UncontrolledCollapse, Button, TabContent, TabPane,
   Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import HoverRating from './Stars';
import AdjustedRating from './AdjustedStars';
import NAVBAR from './Mode'

const ComplexGrid = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

 console.log(`active tap`, activeTab)
  return (
    <>
    <div>
      <NAVBAR />
      <Card>
        <CardBody>
          <CardTitle>Business Name: {props.fact.business_name} </CardTitle>
          <CardSubtitle>Business Address: {props.fact.address} </CardSubtitle>
          <CardText>Business Review: {props.fact.id}</CardText>
          <CardLink className="star" href="#"><HoverRating /></CardLink>
          </CardBody>
          </Card>
          <Card>
            <CardBody>
              {/* <CardLink className="stars" href="#"><AdjustedRating /></CardLink> */}
        </CardBody>
      </Card>
      <div>
              <Card>
              <CardText className="text-review">Business Review:
                <br></br>
                 {props.fact.original_text_review}</CardText>
              </Card>
          </div>
    </div>
    </>
  );
};

export default ComplexGrid;