import React from 'react';
import UserCard from './UserCard';

function UserCardList(props) {
    const userDetails = props.users;

    if (userDetails.length > 0) {
        return (
            <div>
                <ul>
                    {userDetails.map(userAtIndex => 
                        <div key={userAtIndex}>
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