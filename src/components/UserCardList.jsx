import React from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

function UserCardList(props) {
    const userDetails = props.users;

    if (userDetails.length > 0) {
        return (
            <div>
                <ul>
                    {userDetails.map(userAtIndex => 
                        <div  className="userPicture" key={userAtIndex.login}>
                            <UserCard
                                users={userAtIndex}
                            />
                        </div>
                    )}
                </ul>
            </div>
        );
    }
    return (
        <>
        </>
    )
}
export default UserCardList;
