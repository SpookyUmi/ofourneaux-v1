// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import members from 'src/data/groupMembers';
import plant from 'src/assets/icons/plant-pot.svg';
import './styles.scss';

// == Composant
const About = () => {
  return (
    <div className="container">
      <section className="container__section">
        <h2 className="container__section__title">Le projet</h2>
        <p className="container__section__text">Un beau projet
        Pour que vos petits bidons soient contents.</p>
      </section>
      <section className="container__section">
        <h2 className="container__section__title">L'équipe</h2>
        <div className="container__section--flex">
      {members.map((member) => (
        <article key={member.id} className="section__card">
          <img src={plant} alt="plant-icon" className="section__card__image"/>
          <h3 className="section__card__name">{member.firstname} {member.lastname}</h3>
          <h4 className="section__card__role">{member.role}</h4>
          <p className="section__card__description">{member.description}</p>
        </article>
      ))}
        </div>
      </section>
    </div>
  );
};

// == Export
export default About;
