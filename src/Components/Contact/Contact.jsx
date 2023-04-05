import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';

const Contact = () => {
    const data = useLoaderData()
  
    return (
        <div>
            <h2>this is my data length:{data.length}</h2>
            <div>
                {
                    data.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend> )
                }
            </div>
        </div>
    );
};

export default Contact;