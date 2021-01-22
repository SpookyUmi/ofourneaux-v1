// == Import npm
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Contact = () => {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.</p>;
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
          Votre addresse e-mail
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
          Submit
        </button>
      </form>
    </div>
  );
};

// == Export
export default Contact;
