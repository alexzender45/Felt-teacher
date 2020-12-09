import "./navbar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.svg" alt="Felt teacher logo" />
          <p className="title">FELT TEACHERS</p>
        </div>
        <div className='big-menu'><ul className="menu">
          <li>
            <Link to="/teacher/login" className="button">
              Sign in as a Teacher
            </Link>
          </li>
          <li>
            <Link to="/school/login" className="button">
              Sign in as a School Owner
            </Link>
          </li>
        </ul></div>
        
        <div className="mobile-menu">
        <ul className="menu">
          <li>
            <Link to="/teacher/login" className="button">
              Teacher
            </Link>
          </li>
          <li>
            <Link to="/school/login" className="button">
              School
            </Link>
          </li>
        </ul>
        </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
