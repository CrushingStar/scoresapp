import './style.css';
import '../style.css';
import WhiteBox from '../whitebox/whitebox';
import searchById from '../../../searchById';

function Title() {
  return (
    <h1 className="title">Roster</h1>
  );
}

function Content({ id }) {
  const roster = searchById(id).roster;
  let rosterStr = "";
  for (let player of roster) {
    rosterStr += (player + ", ");
  }
  rosterStr = rosterStr.substring(0, rosterStr.length - 2);
  return (
    <div className="leftdiv">
      <p className="roster-text">{rosterStr}</p>
    </div>
  );
}

function RosterBox({ id }) {
  return (
    <WhiteBox Title={Title} Content={Content} contentProps={{ id: id }} width={700} height={325} />
  );
}

export default RosterBox;
