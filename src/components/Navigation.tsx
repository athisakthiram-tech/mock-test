import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TNPSC Portal
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/take-test">
            Take Test
          </Link>

          <Link className="nav-link" to="/learn">
            Learn
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;