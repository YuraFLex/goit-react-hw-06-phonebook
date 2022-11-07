import { useState } from 'react';
import PropTypes from 'prop-types';

import { AddButton } from '../Button/Button';
import s from './ContactForm.module.scss';

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleContactInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    onFormReset();
  };

  return (
    <form className={s.form} onSubmit={e => handleOnSubmit(e)}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleContactInput}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleContactInput}
        />
      </label>
      <AddButton />
    </form>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
