import React from 'react'
//import ProfileCard from "./ProfileCard";
import ComplexGrid from "./ComplexGrid";
import { Link } from "react-router-dom";

//create an individual link on each item,
// uses /movies/fact._id -> extract id, and add to movies to create new url
function YDetail({ fact }) {
  console.log(`YDetails`,fact.id)
    return (
      <>
      <Link to={`/reviews/${fact.id}`}>
        {/* <ProfileCard fact={fact} /> */}
        <ComplexGrid fact={fact} />
      </Link>
      </>
    );
  }

export default YDetail