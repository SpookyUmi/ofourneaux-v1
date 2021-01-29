import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <footer className="desktop">
    <div className="recipes__footer">
      <NavLink to="/a-propos" className="recipes__footer__about link__style">A propos</NavLink>
      <NavLink to="/" className="recipes__footer__home link__style">O'Fourneaux</NavLink>
      <NavLink to="/contact" className="recipes__footer__contact link__style">Contact</NavLink>
    </div>
  </footer>
);

export default Footer;
