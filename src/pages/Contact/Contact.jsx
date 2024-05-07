import Icon from "@mdi/react";
import { mdiAccountMultiple, mdiBriefcase, mdiChat } from "@mdi/js";
import "./Contact.css";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    let error = [];
    !subject ? error.push("subject") : "";
    !email ? error.push("e-mail") : "";
    !message ? error.push("message") : "";
    if (error.length > 0) {
      toast.error(`Error! Missing ${error.join(", ")}`, {
        duration: 8000,
      });
    } else {
      setEmail("");
      setMessage("");
      setSubject("");
      toast.success("Message sent.", { icon: "📨", duration: 5000 });
    }
  };
  return (
    <div className="contact-container">
      <section className="contact__form">
        <h2 className="contact__heading">
          How would you summarize the content of your email?
        </h2>
        <article className="form__radio">
          <input
            className="form__radio-button"
            id="input_hire"
            type="radio"
            name="subject"
            value="Hire"
            checked={subject === "Hire"}
            onChange={(e) => setSubject(e.target.value)}
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
            checked={subject === "Collaboration"}
            onChange={(e) => setSubject(e.target.value)}
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
            checked={subject === "Chat"}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label htmlFor="input_chat" className="form__radio-label">
            <Icon path={mdiChat} size={4} />
            Chat
          </label>
        </article>
        <input
          className="form__input"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="form__input form__input--textarea"
          placeholder="Content"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="form__button" onClick={handleSubmit}>
          Send
        </button>
      </section>
    </div>
  );
};

export default Contact;
