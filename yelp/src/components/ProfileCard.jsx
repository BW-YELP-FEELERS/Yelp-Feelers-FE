import React from 'react';

const ProfileCard = props => {
    console.log(props)

  return (
  <div className='list-card'>
  <p>{props.fact.text}</p>;
  </div>
  )
};

export default ProfileCard;

