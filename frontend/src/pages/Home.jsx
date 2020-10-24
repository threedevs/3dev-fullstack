import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

function BookCard(props) {
	//  TODO replace with actual data

	return (
		<article className="BookCard">
			<h4 className="BookCard__title">book title</h4>
			<dl>
				<dt>author :</dt>
				<dd>John Doe</dd>
				<dt>Published in :</dt>
				<dd>1974</dd>
			</dl>
			<img src={`https://picsum.photos/200/300?random=${props.random}`} alt="book cover" width={200} height={300} className="BookCard__media" />

			{/* TODO style of the link */}
			<Link to={`/books/${props.random}`}>See more</Link>
		</article>
	);
}

function Section({ title }) {
	return (
		<section className="Section">
			<h3 className="Section__title">{title}</h3>
			<ul className="Section__list">
				{/* TODO replace the array */}

				{[...Array(5)].map((i, index) => (
					<li key={index}>
						<BookCard random={index} />
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
			<Section title="Books you are reading" />
			<Section title="Books released this month" />
		</>
	);
}
