import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/Form/ContactForm';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Phone book</h2>
      <ContactsForm />
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.contactListContainer}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
