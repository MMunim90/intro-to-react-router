import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const commentDetail = () => {
    const comment = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default commentDetail;