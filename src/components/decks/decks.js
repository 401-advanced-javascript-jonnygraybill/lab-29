import React from 'react';
import Cards from '../cards/cards.js';
import { If, When, Unless } from '../if/index.js';

const Decks = (props) => {
    let decks = props.decks
    let i = props.i
    return (
        <When condition={decks.title}>
        <section className="decks">
            <header><h2>{decks.title}</h2></header>
            {decks.records.map((cards) =>
                <Cards cards={cards} />
            )}
        </section>
        </When>
    )
}

export default Decks