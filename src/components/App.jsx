import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { addContact, deleteContact } from 'redux/сontacts/contactsSlice';
import { filterContacts } from 'redux/filter/filterSlice';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from '../components/ContactList/ContactList.module.scss';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    contacts.some(({ name }) => name === contact.name)
      ? Notify.failure(`${contact.name} is already in contacts!`)
      : dispatch(addContact(newContact));
  };

  const filtration = filterKey => {
    dispatch(filterContacts(filterKey));
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <div className={s.contacts}>
        <h2 className={s.h2}>Contacts</h2>
        <Filter filtration={filtration} />
        <ContactList contactDelete={contactDelete} />
      </div>
    </Section>
  );
};
