import React from "react";

export default function Home() {
    return (
        <>
            <h2>main layout</h2>
            <section>
                <h3>section title</h3>
                <ul>
                    <li>
                        <article>
                            <h4>book title</h4>
                            <dl>
                                <dt>author :</dt>
                                <dd>John Doe</dd>
                                <dt>Published in :</dt>
                                <dd>1974</dd>
                            </dl>
                            <img src="https://picsum.photos/200/300" alt="book cover" width={200} height={300} />
                        </article>
                    </li>
                </ul>
            </section>
        </>
    );
}