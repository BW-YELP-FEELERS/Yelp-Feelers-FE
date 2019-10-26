import React from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, UncontrolledCollapse, Button, TabContent, TabPane,
     Nav, NavItem, NavLink, Row, Col
  } from 'reactstrap';
  import classnames from 'classnames';
  
  import NAVBAR from './Mode'
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/core/styles';
  import Rating from '@material-ui/lab/Rating';
  import Tooltip from '@material-ui/core/Tooltip';
  import Typography from '@material-ui/core/Typography';
  import Box from '@material-ui/core/Box';


const FavoriteDisplay = (props)  => {
    console.log(`FavoriteDisplay`,props)


    return(
    <>
    <div>
      <NAVBAR />
      <Card>
        <CardBody>
          <CardTitle>Business Name: {props.fact.business_name} </CardTitle>
          <CardSubtitle>Business Address: {props.fact.address} </CardSubtitle>
          <CardText>Business ID: {props.fact.id}</CardText>
          </CardBody>
          </Card>
          <Card>
            <CardBody>
              {/* <CardLink className="stars" href="#"><AdjustedRating /></CardLink> */}
        </CardBody>
      </Card>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"><h1>Rating:</h1></Typography>
        <div className="stars">
          <Rating
            name="hover-side"
            value={props.fact.original_yelp_user_rating}
            readOnly = {true}
          />
        </div>
      </Box>
      <div>
              <Card>
              <CardText className="text-review">Business Review:
                <br></br>
                 {props.fact.original_text_review}</CardText>
              </Card>
      </div>

      {/* adjusted stars */}
      <div id="myDIV">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"><h1>Adjusted Rating:</h1></Typography>
        <div className="stars">
          <Rating
            name="hover-side"
            value={props.fact.yelp_store_rating}
            readOnly = {true}
          />
        </div>
      </Box>
      </div>
    </div>
    </>
  );
};

export default FavoriteDisplay