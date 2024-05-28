import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <button className="nav-button">Home</button>
      </Link>
      <Link to="/joke">
        <button className="nav-button">Joke</button>
      </Link>
      <Link to="/game">
        <button className="nav-button">Game</button>
      </Link>
      <Link to="/idle">
        <button className="nav-button">Idle</button>
      </Link>
    </nav>
  );
}

export default Nav;