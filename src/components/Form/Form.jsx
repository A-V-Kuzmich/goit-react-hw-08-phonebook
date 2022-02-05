import { useState } from 'react';
import { Notification } from '../Notification';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/contact/contact-operation';

import s from './Form.module.scss';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmitt = e => {
    e.preventDefault();

    if (checkName(name)) {
      return Notification(name);
    }
    addContact({ name, phone });
    setName('');
    setPhone('');
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
            value={phone}
            onChange={({ currentTarget: { value } }) => setPhone(value)}
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
