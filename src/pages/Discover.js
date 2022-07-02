import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './css-files/discover.css';
import RestaurantCard from './RestaurantCard';


const USERS = [
  { id: 1, name: 'Pizza Hut', distance: 32, img: '' },
  { id: 2, name: 'Chipotle', distance: 30 },
  { id: 3, name: 'Dominos', distance: 40 },
  { id: 4, name: 'Taco Bell', distance: 50 },
  { id: 5, name: 'McDonalds', distance: 30 },
  { id: 6, name: 'Popeyes', distance: 68 },
  { id: 7, name: 'Chick-Fil-A', distance: 34 },
  { id: 8, name: 'Starbucks', distance: 28 },
  { id: 9, name: 'Piada', distance: 23 },
];


function Discover() {
  const [name, setName] = useState('');

  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }

    setName(keyword);
  };

  return (
    <div style={{color:"white"}} className="container-search-bar">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span><button class='view-restaurant'> View Restaurant </button>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.distance} miles away</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
        
      </div>
      <div>
      <Dropdown>
       <Dropdown.Toggle className='filter-button'>
         Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item  href="#/action-1" > Filter By Distance</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Filter By Food</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </div>
    
  );
}

export default Discover;