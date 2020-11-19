import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Login from './Login';
import Book from './Book';
import Profile from './Profile';

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route exact path="/" children={<Home />} />
					<Route path="/about" children={<About />} />
					<Route path="/login" children={<Login />} />
					<Route path="/books/:id" children={<Book />} />
					<Route path="/profile/:id" children={<Profile />} />
				</Switch>
			</main>
			<Footer />
		</>
	);
}
