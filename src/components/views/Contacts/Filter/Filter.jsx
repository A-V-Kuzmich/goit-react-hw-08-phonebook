import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contact/contact-selectors';
import { filterContact } from 'redux/contact/contactsSlice';

import s from './Filter.module.scss';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterContacts = ({ currentTarget: { value: filter } }) => {
    dispatch(filterContact(filter));
  };

  return (
    <label className={s.filter}>
      <input
        type="text"
        value={value}
        onChange={filterContacts}
        className={s.input}
        placeholder="Find contact by name"
      />
    </label>
  );
}
