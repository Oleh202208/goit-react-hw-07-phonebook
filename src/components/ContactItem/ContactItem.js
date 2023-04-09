import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, phone, id, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span>
        {name}: {phone}
      </span>
      <button
        className={styles.buttonDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
