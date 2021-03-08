import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    
    const handleClick= (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        borderRadius: '1em',
        margin: '1em',
        padding: '1em'
    }
   
    return (
        <div style={friendStyle}>
            <h2>Friend name: {name}</h2>
            <p>Email: {email}</p>
            <p>ID: <Link to={`/friend/${id}`}>Show detail of {id}</Link></p>
            <button onClick={ ()=>handleClick(id) }>Click me</button>
        </div>
    );
};

export default Friend;