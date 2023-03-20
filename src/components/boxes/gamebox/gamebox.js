import '../style.css';
import './style.css';
import { Link } from "react-router-dom";

// TODO : Reformat the divs, they should be organized by column not row

function GameBox({ id, team1, team2, score1, score2, livetext }) {
  return (
    <Link to={`/soccer/${id}`}>
      <div className="gamebox">
        <div className="leftdiv">
          <div className="parent">
            <img className="smallimg" src={`/imgs/${team1}.png`}></img>
            <p className="team">{team1}</p>
            {
              score1 < 10 ?
                <p className="score">&nbsp;&nbsp;{score1}</p> :
                <p className="score">{score1}</p>
            }
          </div>
          <div className="parent">
            <img className="smallimg" src={`/imgs/${team2}.png`}></img>
            <p className="team">{team2}</p>
            {
              score2 < 10 ?
                <p className="score">&nbsp;{score2}</p> :
                <p className="score">{score2}</p>
            }
          </div>
        </div>
        <div className="rightdiv">
          <ul>
            <li>
              {
                livetext.toLowerCase() === "live" ?
                  <p className="livetext">LIVE</p> :
                  <p className="fttext">FT&nbsp;&nbsp;&nbsp;</p>
              }

            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default GameBox;