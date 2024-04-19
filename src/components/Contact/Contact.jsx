import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact: { id, name, phone }, setter }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setter('');
  };

  return (
    <div className={css.contact}>
      <div>
        <div className={css.contactInfo}>
          <FaUser className={css.contactIcon} />
          <h2 className={css.name}>{name}</h2>
        </div>
        <div className={css.contactInfo}>
          <FaPhone className={css.contactIcon} />
          <p className={css.phone}>{phone}</p>
        </div>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={handleDeleteContact}
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  setter: PropTypes.func.isRequired,
};

export default Contact;
