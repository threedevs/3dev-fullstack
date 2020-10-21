import React from "react";
import './home.scss';

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
            <img
                src={`https://picsum.photos/200/300?random=${props.random}`}
                alt="book cover"
                width={200}
                height={300}
                className="BookCard__media" />
        </article>
    )
}

function Section(props) {
    return (
        <section className="Section">
            <h3 className="Section__title">{props.title}</h3>
            <ul className="Section__list">
                {
                    [...Array(5)].map((i, index) =>
                        <li key={index}>
                            <BookCard random={index} />
                        </li>)
                }
            </ul>
        </section>
    )
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