import React from 'react';
import './users.css';

function UserCard(props) {
    console.log("card props", props.users)

    return (
        <div>
            <img src={props.users.avatar_url}/>   
        </div>
    )
}

export default UserCard;