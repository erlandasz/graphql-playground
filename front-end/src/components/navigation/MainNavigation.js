import React from 'react';
import { NavLink } from 'react-router-dom';


const mainNavigation = props => ( 

    <nav class='navbar navbar-dark bg-dark'>
        <div class='navbar-brand'>coolBrandName</div>
        <ul class='navbar-nav'>
            <li>
                <NavLink to='/admin'>admin</NavLink>
            </li>
            <li >
                <NavLink to='/list'>list</NavLink>
            </li>
        </ul>

    </nav>
)

export default mainNavigation;