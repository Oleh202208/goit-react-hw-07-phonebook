import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/Operations/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, phone, id }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          phone={phone}
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
