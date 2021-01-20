// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import photo from 'src/assets/images/cooking.png';
import '../styles.scss';

// == Composant
const HomePresentation = ({ title }) => {

  return (
    <div className="home__presentation">
      <section className="home__presentation__elem home__presentation__text">
        <h2>Gérez votre quotidien avec {title}</h2>
        <p>Moderne et ludique, O'Fourneaux vous accompagne au quotidien
        en vous proposant des recettes variées, en fonction de la saison
        et de vos exigences alimentaires.</p>
        <a className="home__presentation__elem--button">S'inscrire</a>
      </section>
      <section className="home__presentation__elem">
        <img src={photo} className="home__presentation__img"/>
      </section>
    </div>
  );
};

// == Export
export default HomePresentation;
