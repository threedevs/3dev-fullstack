import React, { useEffect, useState } from 'react';
import './home.scss';

import { allBooksURL } from '../SERVER';
import BookCard from '../components/BookCard';

function Section({ title }) {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch(allBooksURL)
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					return Promise.reject();
				}
			})
			.then((data) => setBooks(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<section className="Section">
			<h3 className="Section__title">{title}</h3>
			<ul className="Section__list">
				{books.map((book) => (
					<li key={book._id}>
						<BookCard book={book} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default function Home() {
	return (
		<>
			<h2 className="PageTitle">Welcome home</h2>
			<Section title="All the books" />
		</>
	);
}
