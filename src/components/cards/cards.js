import React from 'react';

const Cards = (props) => {
  let cards = props.cards;
  return (
    <div className="cards">
      <header><h3>{cards.title}</h3></header>
      <div className="content">{cards.copy}</div>
      <figure>
        <img src={cards.media.href} alt={cards.media.alt} />
        <figcaption>{cards.media.title}</figcaption>
      </figure>
      <nav className="links">
        <ul>
          {cards.links.map((link, i) => (
            <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Cards;