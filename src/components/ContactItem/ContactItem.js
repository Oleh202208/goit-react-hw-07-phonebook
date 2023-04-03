import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span>
        {name}: {number}
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
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
