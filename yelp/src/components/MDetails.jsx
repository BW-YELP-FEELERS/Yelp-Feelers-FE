import React from 'react'
//import ProfileCard from "./ProfileCard";
import ComplexGrid from "./ComplexGrid";
import { Link } from "react-router-dom";
import MyProfile from './MyProfile'

//create an individual link on each item,
// uses /movies/fact._id -> extract id, and add to movies to create new url
function MDetail({ mod }) {
  console.log(`MDetails`,mod.id)
    return (
      <>
      <Link to={`/reviews/${mod.id}`}>
        <MyProfile mod={mod} />
      </Link>
      </>
    );
  }

export default MDetail