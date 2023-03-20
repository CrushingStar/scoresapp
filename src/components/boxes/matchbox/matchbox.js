import '../style.css';
import './style.css';
import GameBox from '../gamebox/gamebox';
import WhiteBox from '../whitebox/whitebox';
import games from '../../../info';
import searchById from '../../../searchById';


function Title({ id }) {
  return (
    <div className="matchlive">
      <h1>Match</h1>
      {
        searchById(id).livetext.toLowerCase() === "live" ?
          <p className="livetext">LIVE</p> :
          <p className="fttext">FT</p>
      }
    </div>
  );
}

function Content({ id }) {
  const game = searchById(id);
  return (
    <div class="liveteam">
      <img class="liveimg" src={`/imgs/${game.team1}.png`}></img>
      <p class="livescore">{game.score1}</p>
      <p class="livescore">-</p>
      <p class="livescore">{game.score2}</p>
      <img class="liveimg" src={`/imgs/${game.team2}.png`}></img>
    </div>
  );
}


function MatchBox({ id }) {
  return (
    <WhiteBox Title={Title} titleProps={{ id: id }} Content={Content} contentProps={{ id: id }} width={700} height={250} />
  );
}

export default MatchBox;
