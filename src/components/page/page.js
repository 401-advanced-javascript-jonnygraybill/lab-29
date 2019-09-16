import React from 'react';
import Cards from '../cards/cards.js';
import Decks from '../decks/decks.js';
import { If, When, Unless } from '../if/index.js';

const Page = (props) => {
  const content = props.content || [];
  return (
    <>
      {content.map((decks, i) => (
        <Decks decks={decks} i={i} />
      ))}
    </>
  );
};

export default Page;