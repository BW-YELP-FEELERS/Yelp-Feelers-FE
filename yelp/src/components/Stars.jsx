// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
// import Tooltip from '@material-ui/core/Tooltip';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function IconContainer(props) {
//   const { value, ...other } = props;
//   return (
//     <Tooltip title={labels[value] || ''}>
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

// export default function HoverRating(props) {
//   console.log(props)
//   const value = 2;
//   const [hover, setHover] = React.useState(-1);
//   const classes = useStyles();

//   return (
//     <div>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend"><h1>Rating:</h1></Typography>
//         <div className="stars">
//           <Rating
//             name="hover-side"
//             value={4}
//             readOnly = {true}
//           />
//           <Box ml={4}>{value[hover !== -1 ? hover : value]}</Box>
//         </div>
//       </Box>
//     </div>
//   );
// }