import React, { useState, useEffect } from 'react';
import './App.css';
import Friend from './components/Friend/Friend';

function App() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])

  return (
    <div >
          <h1>Friends: {friends.length}</h1>
          {
            friends.map(friend => <Friend friend ={friend}></Friend>)
          }
    </div>
  );
}

export default App;
