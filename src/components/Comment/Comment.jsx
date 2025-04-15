import React from 'react';
import { Link, useNavigate } from 'react-router';

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    const navigate = useNavigate()

    const handleNevigate = () => {
        navigate(`/comments/${id}`);
    }
    return (
        <div style={{border: '2px solid gray'}}>
            <h3>{name}</h3>
            <h5>{email}</h5>
            <Link to={`/comments/${id}`}>
            <button>Show Comment</button>
            </Link>
            <button onClick={handleNevigate}>Detail of: {id}</button>
        </div>
    );
};

export default Comment;