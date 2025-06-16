import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState('hi');

  return (
    <section className={css.contactform} id="contactform">
      <div className={css.header}>
        <h2><span className={css.highlight}>Contact Us</span></h2>
        <p>Connect with Us: Let’s Discuss Your Digital Marketing Needs</p>
      </div>

      <form className={css.form}>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="type"
              value="hi"
              checked={selectedOption === 'hi'}
              onChange={() => setSelectedOption('hi')}
            />
            Say Hi
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="quote"
              checked={selectedOption === 'quote'}
              onChange={() => setSelectedOption('quote')}
            />
            Get a Quote
          </label>
        </div>

        <label className={css.label}>
          Name
          <input type="text" name="name" placeholder="Name" className={css.input} required />
        </label>

        <label className={css.label}>
          Email*
          <input type="email" name="email" placeholder="Email" className={css.input} required />
        </label>

        <label className={css.label}>
          Message*
          <textarea name="message" placeholder="Message" className={css.textarea} required />
        </label>

        <button type="submit" className={css.button}>Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;