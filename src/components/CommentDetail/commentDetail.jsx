import React from 'react';
import { useLoaderData } from 'react-router';

const commentDetail = () => {
    const comment = useLoaderData();
    return (
        <div>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};

export default commentDetail;