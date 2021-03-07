import React from 'react';

const Friend = (props) => {
    const {name, email} = props.friend;
    const friendStyle = {
     border :'1px solid lightgray',
     borderRadius :'1em',
     margin : '1em',
     padding: '1em'

    }
    return (
        <div style={friendStyle}>
            <h2>Friend name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;