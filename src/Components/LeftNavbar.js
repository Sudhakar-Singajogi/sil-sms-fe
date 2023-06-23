import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
  return (
    <><nav className="col-md-2 d-none d-md-block sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link" activeClassName="active">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>

    

    </>

  );
};

export default LeftNavbar;
