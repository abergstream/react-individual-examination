import Icon from "@mdi/react";
import { mdiAccountMultiple, mdiBriefcase, mdiChat } from "@mdi/js";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact__form">
        <h2>What do you want to say?</h2>
        <article className="form__radio">
          <input
            className="form__radio-button"
            id="input_hire"
            type="radio"
            name="subject"
            value="Hire"
          />
          <label htmlFor="input_hire" className="form__radio-label">
            <Icon path={mdiBriefcase} size={4} />
            Hire
          </label>
          <input
            className="form__radio-button"
            id="input_collab"
            type="radio"
            name="subject"
            value="Collaboration"
          />

          <label htmlFor="input_collab" className="form__radio-label">
            <Icon path={mdiAccountMultiple} size={4} />
            Collaborate
          </label>
          <input
            className="form__radio-button"
            id="input_chat"
            type="radio"
            name="subject"
            value="Chat"
          />

          <label htmlFor="input_chat" className="form__radio-label">
            <Icon path={mdiChat} size={4} />
            Chat
          </label>
        </article>
      </section>
    </div>
  );
};

export default Contact;
