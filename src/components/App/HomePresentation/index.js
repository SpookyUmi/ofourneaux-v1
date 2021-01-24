// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import photo from 'src/assets/images/cooking.png';
import './styles.scss';

// == Composant
const HomePresentation = ({ title }) => {

  return (
    <div className="home__presentation">
      <div className="home__container">
        <section className="home__container__elem home__container__text">
          <h2 className="home__presentation__title">Gérez votre quotidien avec {title}</h2>
          <p>Moderne et ludique, O'Fourneaux vous accompagne au quotidien
            en vous proposant des recettes variées, en fonction de la saison
            et de vos exigences alimentaires.</p>
          <a className="home__container__elem button__style">S'inscrire</a>
        </section>
        <section className="home__container__elem">
          <img src={photo} className="home__container__img"/>
        </section>
      </div>
    </div>
  );
};

// == Export
export default HomePresentation;
