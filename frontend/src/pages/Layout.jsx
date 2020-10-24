import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</>
	);
}
