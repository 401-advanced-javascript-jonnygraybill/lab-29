import React from 'react'
import Cards from '../cards/cards.js'

const Decks = (props) => {
    let decks = props.decks
    let i = props.i
    return (
        <section className="decks">
            <header><h2>{decks.title}</h2></header>
            {decks.records.map((cards) =>
                <Cards cards={cards} />
            )}
        </section>
    )
}

export default Decks