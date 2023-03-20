import '../style.css';
import GameBox from '../gamebox/gamebox';
import WhiteBox from '../whitebox/whitebox';
import games from '../../../info';

function Title() {
  return (
    <h1 className="title">Fixtures</h1>
  );
}

function Content() {
  return (
    <div>
      {
        games.map(game => {
          return (
            <GameBox id={game.id} team1={game.team1} team2={game.team2} score1={game.score1} score2={game.score2} livetext={game.livetext} />
          );
        })
      }
    </div>
  );
}

function FixtureBox() {
  return (
    <WhiteBox Title={Title} Content={Content} />
  );
}

export default FixtureBox;
