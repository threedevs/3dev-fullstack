import React from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

function NavItem({ route, name }) {
	return (
		<li className="Navigation__item">
			<Link to={route} className="Navigation__link">
				{name}
			</Link>
		</li>
	);
}

export default function Navigation(props) {
	return (
		<nav className={`Navigation ${props.open ? 'Navigation--open' : ''}`}>
			<ul className="Navigation__list">
				<NavItem route="/" name="Home" />
				<NavItem route="/about" name="About" />
			</ul>
			<div className="Navigation__section">
				{/* TODO add user id */}
				<NavItem route={`/profile/17`} name="Profile" />
			</div>

			{/* TODO add theme switch */}
		</nav>
	);
}
