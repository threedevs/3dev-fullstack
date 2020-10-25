import React from 'react';
import { Link } from 'react-router-dom';
export default function BookCard({ book }) {
	return (
		<article className="BookCard">
			<h4 className="BookCard__title">{book.title}</h4>
			<dl>
				<dt>author :</dt>
				<dd>{book.author}</dd>
				<dt>Published in :</dt>
				<dd>{book.yearPublished}</dd>
			</dl>
			<img src={`https://picsum.photos/200/300?random=${book._id}`} alt="book cover" width={200} height={300} className="BookCard__media" />

			<Link to={`/books/${book._id}`} aria-label={`See page of ${book.title}`}>
				See more
			</Link>
		</article>
	);
}
