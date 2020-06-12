import React from 'react';
import Items from './children/Items';
import './css/index.css';

function Parent() {
  return (
    <div>
      <Items
        image={require('./images/ourserices-2.jpg')}
        name='Cheapest barbing'
        price='N 400'
        location='at Luxor barbing Salon abuja'
      />
      <Items
        image={require('./images/ourserices-2.jpg')}
        name='Cheapest barbing'
        price='N 400'
        location='at Luxor barbing Salon abuja'
      />
      <Items
        image={require('./images/ourserices-2.jpg')}
        name='Cheapest barbing'
        price='N 400'
        location='at Luxor barbing Salon abuja'
      />
    </div>
  );
}
export default Parent;
