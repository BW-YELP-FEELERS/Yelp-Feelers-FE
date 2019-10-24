import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { flexbox } from '@material-ui/system';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "50%",
    display: "flexbox",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    paddingLeft: "50%",
    backgroundColor: "#cccccc",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/reviews" label="Recents" value="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction component={Link} to="/register" label="Favorites" value="Favorites" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
}