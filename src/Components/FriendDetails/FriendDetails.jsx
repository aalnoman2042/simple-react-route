import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    console.log(friend);
    const navigate = useNavigate()
    const useNavigation = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>everything about this person</h3>
            <h2>name:{friend.name}</h2>
            <p>phone:{friend.phone}</p>
            <button onClick={useNavigation}>go back</button>
        </div>
    );
};

export default FriendDetails;