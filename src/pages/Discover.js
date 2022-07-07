import React, { useState } from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
import RestaurantCard from './RestaurantCard';
import { MDBCol } from "mdbreact";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function Discover(props) {
  return (
    <>
    <h2>Discover Restaurants</h2>
    <MDBCol md="6">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>
    <Box sx={{ width: 300 }}>
      <h1 style={{fontSize: '20px'}} >Distance in Miles: </h1>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
    <Box sx={{ width: 300 }}>
      <h1 style={{fontSize: '20px'}} >Weight of Food Available in Pounds: </h1>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
    <div className="liked container">
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
      </MDBRow>
    </div>
    </>
  );
}

export default Discover;