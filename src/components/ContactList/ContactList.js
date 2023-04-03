import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice/contactsSlice';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
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
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
