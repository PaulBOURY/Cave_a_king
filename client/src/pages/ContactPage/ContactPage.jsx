import { Form } from "react-router-dom";

import "./ContactPage.scss"

function ContactPage() {
  return (
    <>
      <h2 id="formulaire">Contact</h2>
      <Form method="post" className="registration-form">
        <label className="label-registration" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="input-registration"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Prénom"
          required
        />
        <label className="label-registration" htmlFor="lastname">
          Nom
        </label>
        <input
          className="input-registration"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Nom"
          required
        />
        <label className="label-registration" htmlFor="email">
          Email
        </label>
        <input
          className="input-registration"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-registration" htmlFor="message">
          Message
        </label>
        <textarea
          className="input-registration input-message"
          type="text"
          id="message"
          name="message"
          placeholder="Votre message..."
          rows="20"
          required
        />
        <button className="validation-button validation-message" type="submit">
          Envoyer le message
        </button>
      </Form>
    </>
  );
}

export default ContactPage;
