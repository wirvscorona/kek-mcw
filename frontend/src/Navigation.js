import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = _ => (
    <div className='navigation'>
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/app">React App</Link>
                </li>
                <li>
                    <Link to="/diary">Diary</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navigation;