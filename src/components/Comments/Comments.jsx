import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from '../Comment/Comment';

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h3>These are comments: {comments.length}</h3>
            <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
            </div>
        </div>
    );
};

export default Comments;