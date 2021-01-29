// == Import npm
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import photo from 'src/assets/images/dish.png';
import './styles.scss';

// == Composant
const HomePresentation = ({ title }) => {

  return (
    <div className="home__presentation">
      <div className="home__container">
        <section className="home__container__elem home__container__text">
          <h2 className="home__presentation__title">Gérez votre quotidien avec {title}</h2>
          <p>
            Moderne et ludique, O'Fourneaux vous accompagne au quotidien
            en vous proposant des recettes variées et adaptées à chacun, grâce à une démarche éco-responsable et inclusive.
            Cuisinez des recettes en fonction de la saison et de vos préférences !
          </p>
          <NavLink exact to="/inscription" className="home__container__elem button__style">S'inscrire</NavLink>
        </section>
        <section className="home__container__elem">
          <img src={photo} className="home__container__img"/>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.app.title,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, null)(HomePresentation);
