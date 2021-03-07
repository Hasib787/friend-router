import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
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
        </div>
    );
};

export default Friend;