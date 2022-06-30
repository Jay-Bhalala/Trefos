import React, { useState } from 'react';

import './css-files/discover.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Pizza Hut', distance: 32 },
  { id: 2, name: 'Dominos', distance: 30 },
  { id: 3, name: 'Chipotle', distance: 40 },
  { id: 4, name: 'Taco Bell', distance: 50 },
  { id: 5, name: 'McDonalds', distance: 30 },
  { id: 6, name: 'Chick-Fil-A', distance: 68 },
  { id: 7, name: 'Popeyes', distance: 34 },
  { id: 8, name: 'Panda Express', distance: 28 },
  { id: 9, name: 'Starbucks', distance: 23 },
];

function Discover() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
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
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.distance} miles away</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Discover;