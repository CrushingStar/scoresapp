import games from './info';

function searchById(id) {
  for (let game of games) {
    if (game.id === id) return game;
  }
}

export default searchById;