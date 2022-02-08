import { useState } from 'react';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/contact/contact-operation';
import { NotificationWarning } from 'components/Notification';

import s from './Form.module.scss';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmitt = e => {
    e.preventDefault();

    if (checkName(name)) {
      return NotificationWarning(name, 'is already in contacts.');
    }
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const checkName = newName => {
    return data.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmitt} className={s.form}>
        <label>
          <input
            className={s.name}
            type="text"
            name="name"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className={s.number}
            type="tel"
            name="number"
            value={number}
            onChange={({ currentTarget: { value } }) => setNumber(value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone"
          />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
