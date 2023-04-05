import React from 'react';
import "./Friend.css"
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, id, phone} = friend

    const navigate = useNavigate()
    const useNavigation = () =>{
        navigate(`/friend/${id}`)
    }
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email:{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/friend/${id}`}>show me details</Link></p>
            <button onClick={useNavigation} >details</button>
        </div>
    );
};

export default Friend;