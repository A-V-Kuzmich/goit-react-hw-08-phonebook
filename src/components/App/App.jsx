import Form from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactList';

import s from './App.module.scss';

export default function App() {
  return (
    <div>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <div className={s.phonebook}>
        <Form />
        <section className={s.contacts}>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </div>
  );
}
