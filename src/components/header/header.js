import './style.css';

function Header() {
  return (
    <div className="header">
      <div className="dropdown">
        <button id="dropbtn" className="dropbtn">Soccer<i className="arrow down"></i></button>
        <div className="dropdown-content">
          {/* <a className="sport-option" href='#' onClick={changeOption(event)}>Soccer</a>
          <a className="sport-option" href="#" onClick={changeOption(event)}>Badminton</a> */}
        </div>
      </div>

      <div style={{ textAlign: "center", verticalAlign: "middle", lineHeight: "normal" }}>
        <img src="/imgs/SIS.png" className="bigimg"></img>
      </div>
      <button className="gradient-button"> tigersportscouncil </button>
    </div>
  );
}

export default Header;


