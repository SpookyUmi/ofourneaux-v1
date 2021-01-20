// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import '../styles.scss';

// == Composant
const HomePresentation = ({ title }) => {

  return (
    <div className="home__presentation">
      <section className="home__presentation__elem">
        <h2>Gérez votre quotidien avec {title}</h2>
        <p>Moderne et ludique, O'Fourneaux vous accompagne au quotidien
        en vous proposant des recettes variées, en fonction de la saison
        et de vos exigences alimentaires.</p>
        <button>S'inscrire</button>
      </section>
      <img href="/public/img/perfect_meme.png" className="home__presentation__elem"/>
    </div>
  );
};

// == Export
export default HomePresentation;
