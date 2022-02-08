import Filter from './Filter';
import Form from './Form';
import ContactList from './ContactList';
import s from './Contacts.module.scss';

export default function Contacts() {
  return (
    <>
      <section className={s.phonebook}>
        <Form />
        <div className={s.contacts}>
          <h2 className={s.title}>My Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </>
  );
}
