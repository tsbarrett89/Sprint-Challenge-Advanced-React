import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayerCard from './components/PlayerCard';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays a Navbar with the text Most Searched World Cup Players', () => {
  const container = render(<App />);
  container.getByText('Most Searched World Cup Players');
})

test('it displays a label with the text dark-mode', () => {
  const container = render(<App />);
  container.getByText('Dark Mode');
})

test('it displays a player card with the text searches', () => {
  const container = render(<PlayerCard />);
  container.getAllByText('Searches:');
})