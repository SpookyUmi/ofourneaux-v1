import React from 'react';
import { NavLink } from 'react-router-dom';

// import './footer.scss';

const Footer = () => (
  <div className="recipes__footer">
    <NavLink to="/a-propos" className="recipes__footer__about">A propos</NavLink>
    <NavLink to="/" className="recipes__footer__home">O'Fourneaux</NavLink>
    <NavLink to="/contact" className="recipes__footer__contact">Contact</NavLink>
  </div>
);

export default Footer;
