// == Import npm
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// == Import
import './styles.scss';
import plane from 'src/assets/images/paper-plane.svg';
import { NavLink } from 'react-router-dom';

// == Composant
const Contact = () => {
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return (
      <div className="contact message__sent">
        <h3>Merci pour votre message !</h3>
        <h3>Nous vous répondrons dans les plus brefs délais.</h3>
        <img src={plane} alt="avion en papier" className="message__sent__icon" />
        <NavLink to="/" className="button__style">Retour à l'accueil</NavLink>
      </div>
    );
  }
  return (
    <div className="contact">
      <h2 className="contact__title">Contactez-nous !</h2>
      <form
        onSubmit={handleSubmit}
        className="contact__form"
        action="https://formspree.io/p/1596756043252104978/f/contactForm"
        method="POST"
      >
        <label htmlFor="email">
          Votre adresse e-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="michmich@gmail.com"
          className="contact__form__input"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Mon merveilleux message"
          className="contact__form__input"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="contact__form__input">
          Envoyer
        </button>
      </form>
    </div>
  );
};

// == Export
export default Contact;
