import React from "react";
import './navigation.scss';

export default function Navigation(props) {
    return (
        <nav className={`Navigation ${props.open ? 'Navigation--open' : ''}`}>
            <ul className="Navigation__list">
                <li className="Navigation__item">
                    <a href="/" className="Navigation__link">books</a>
                </li>
                <li className="Navigation__item">
                    <a href="/" className="Navigation__link">login</a>
                </li>
            </ul>
            <div className="Navigation__section">
                <a href="/" className="Navigation__link">Profile</a>
            </div>
        </nav>
    )
}