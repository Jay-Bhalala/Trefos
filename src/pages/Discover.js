import React, { useState } from 'react';
import './css-files/discover.css';


const USERS = [
  {id:1 , name: "Pizza hut", distance:2 , food: "Pizza"},
  {id:2 , name: "Dominos", distance:3 , food: "Pizza"},
  {id:3 , name: "Chiptole", distance:4 , food: "Mexican"},
  {id:4 , name: "Taco Bell", distance:5 , food: "Mexican"},
  {id:5 , name: "Mcdonalds", distance:6 , food: "Burgers"},
  {id:6 , name: "Starbucks", distance:7 , food: "Coffee"},
  {id:7 , name: "Chick-Fil-A", distance:8 , food: "Chicken"},
  {id:8 , name: "Popeyes", distance:9 , food: "Chicken"},
  {id:9 , name: "Panda Express", distance:10 , food: "Chinese"},
  {id:10 , name: "Sushi", distance:11 , food: "Fish"}
]

//let numbers = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56];







function Discover() {
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
      
      <button > Hi </button>
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
              <span style={{width:100}} className="user-id">{user.id}</span><button style={{width:30}}></button>
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

export default Discover();

