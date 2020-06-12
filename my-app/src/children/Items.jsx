import React from 'react';
import '../css/index.css';
function Items(props) {
  return (
    <div>
      <img className='my-image' src={props.image} alt=' first pic' />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.location}</p>
    </div>
  );
}

export default Items;
