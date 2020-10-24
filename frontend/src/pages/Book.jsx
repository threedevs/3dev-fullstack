import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { bookURL } from '../SERVER';

export default function Book() {
	const { id } = useParams();
	const [book, setBook] = useState({});

	useEffect(() => {
		fetch(`${bookURL}${id}`)
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					return Promise.reject();
				}
			})
			.then((data) => setBook(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<h2 className="PageTitle">{book.title}</h2>
			<dl>
				<dt>author</dt>
				<dd>{book.author}</dd>
				<dt>genre</dt>
				<dd>{book.genre}</dd>
				<dt>year</dt>
				<dd>{book.yearPublished}</dd>
			</dl>
			<img src={`https://picsum.photos/200/300`} alt="book cover" width={200} height={300} />
		</>
	);
}
