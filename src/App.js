import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])

  return (
    <div className="App">
          <h1>Friends: {friends.length}</h1>
    </div>
  );
}

export default App;
