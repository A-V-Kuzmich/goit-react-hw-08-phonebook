import Filter from './Filter/Filter';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import s from './Contacts.module.scss';

export default function Contacts() {
  return (
    <section className={s.phonebook}>
      <Form />
      <div className={s.contacts}>
        <h2 className={s.title}>My Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
}
