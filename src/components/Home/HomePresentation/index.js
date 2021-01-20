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
        <button>S'inscrire</button>
      </section>
      <section className="home__presentation__elem">
        <img src={photo} className="home__presentation__img"/>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffdfb1" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </div>
  );
};

// == Export
export default HomePresentation;
