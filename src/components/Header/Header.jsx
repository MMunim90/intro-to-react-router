import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobile</NavLink>
                <NavLink to="/laptops">Laptop</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/users2">User2</NavLink>
                <NavLink to="/comments">Comment</NavLink>
            </nav>
        </div>
    );
};

export default Header;