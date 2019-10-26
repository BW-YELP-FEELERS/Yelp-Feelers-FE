import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


// function IconContainer(props) {
  // console.log(props)
//   const { value, ...other } = props;
//   return (
//     <Tooltip title={value}>
//       <div {...other} />
//     </Tooltip>
//   );
// }

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles({
//   rating1: {
//     width: 200,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: "column",
//     margin: "0, auto",
//     padding: "1rem",
//     fontSize: "2rem",
//   },
// });

export default function AdjustedStars(props) {
console.log(props)
  // const value = 4;
  // const [hover, setHover] = React.useState(-1);
  // const classes = useStyles();

  return (
    <div>
      <div id="myDIV">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"><h1>Adjusted Rating:</h1></Typography>
        <div className="stars">
          <Rating
            name="hover-side"
            value={props.fact.yelp_rating}
            readOnly = {true}
          />
          {/* <Box ml={3}>{value[hover !== -1 ? hover : value]}</Box> */}
        </div>
      </Box>
      </div>
    </div>
  );
}