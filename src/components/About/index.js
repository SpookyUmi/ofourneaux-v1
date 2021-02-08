// == Import npm
import React from 'react';

// == Import
import members from 'src/data/groupMembers';
import './styles.scss';

// == Composant
const About = () => (
  <div className="container">
    <section className="container__section">
      <h2 className="container__section__title">Le projet</h2>
      <p className="container__section__text">L'idée de ce projet nous est venue suite à cette constatation que, comme beaucoup de monde, nous avons un emploi du temps chargé. Que l'on soit étudiant, actif, parent, on fait tous face à toutes sortes de contraintes au quotidien, il est alors plus difficile d'avoir le temps de réfléchir à ses repas, d'avoir l'énergie et l'inspiration de trouver quoi cuisiner. Nous vous proposons donc notre solution : <strong>O'Fourneaux</strong>, une webapp génératrice de recettes, qui vous aidera à être plus serein et plus organisé jour après jour. <br />
        {/* eslint-disable-next-line max-len */}
        <br />Grâce à son générateur, O'Fourneaux vous fera découvrir des recettes variées, sélectionnées en fonction de la saison actuelle, de vos exigences alimentaires et des dernières recettes que vous aurez sélectionnées. À cela s'ajoute une liste de courses adaptée : il vous suffit de sélectionner une ou plusieurs recettes pour qu'elle se remplisse. Ajoutez ensuite les recettes que vous avez aimées dans vos favoris afin de les retrouver plus facilement !
      </p>
    </section>
    <section className="container__section">
      <h2 className="container__section__title">L'équipe</h2>
      <div className="container__section--flex">
        {members.map((member) => (
          <article key={member.id} className="section__card">
            <img src={member.img} alt={member.name} className="section__card__image" />
            <h3 className="section__card__name">{member.firstname} {member.lastname}</h3>
            <h4 className="section__card__role">{member.role}</h4>
            <p className="section__card__description">{member.description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

// == Export
export default About;
