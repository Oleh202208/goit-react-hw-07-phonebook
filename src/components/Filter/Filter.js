import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slice/filterSlice';
import styles from './Filter.module.css';
import { useFilter } from 'hooks/useFilter';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputValue = useFilter();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={inputValue}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      ></input>
    </label>
  );
};
