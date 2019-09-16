import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../components/page/page.js';
import Cards from '../components/cards/cards.js';
import Decks from '../components/decks/decks.js';
import content from '../../src/content.json';

describe('<Page/>', () => {
  it('is alive at time of application start', () => {
    let app = mount(<Page content={content} />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});