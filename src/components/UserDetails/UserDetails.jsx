import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    const {userId} = useParams();
    console.log(userId);

    // const params = useParams();
    // console.log(params.userId)
    const {name, website} = user;
    return (
        <div>
            <h3>User Details Here</h3>
            <h5>Name: {name}</h5>
            <p>website is: {website}</p>
        </div>
    );
};

export default UserDetails;