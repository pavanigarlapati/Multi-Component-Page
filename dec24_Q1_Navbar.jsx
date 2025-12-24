import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/todos">Todos</Link>
    </nav>
  );
}

export default Navbar;
