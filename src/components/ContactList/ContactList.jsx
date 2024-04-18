import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const updatedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredContacts(updatedContacts);
  }, [contacts, filter]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;