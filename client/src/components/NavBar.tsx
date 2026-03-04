import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Gimnasio Mental
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link" style={{ cursor: 'pointer' }}>Juegos</span>
            </li>
            <li className="nav-item ms-3">
              <a className="btn btn-dark btn-rounded" href="/login">Iniciar sesion</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registrarse</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;