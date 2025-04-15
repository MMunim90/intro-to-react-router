import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    return (
        <div style={{border: '2px solid gray'}}>
            <h3>{name}</h3>
            <h5>{email}</h5>
            <Link to={`/comments/${id}`}>
            <button>Show Comment</button>
            </Link>
        </div>
    );
};

export default Comment;