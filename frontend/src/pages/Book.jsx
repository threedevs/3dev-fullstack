import React from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {
	let { id } = useParams();

	return (
		<>
			<h2 className="PageTitle">Book {id} page</h2>
			<p>this is the book {id} page</p>
			<img src={`https://picsum.photos/200/300`} alt="book cover" width={200} height={300} />
		</>
	);
}
