// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import members from 'src/data/groupMembers'
import './styles.scss';

// == Composant
const About = () => {

  return (
    <div className="about__container">
      <section className="about__container__section">
        <p></p>
        <p></p>
      </section>
      <section className="about__container__section">
      {members.map((member) => (
        <article key={member.id}>
          <img src={member.picture} alt="profile-picture"/>
          <h3>{member.firstname} {member.lastname}</h3>
          <h4>{member.role}</h4>
          <p>{member.description}</p>
        </article>
      ))}
      </section>
    </div>
  );
};

// == Export
export default About;
