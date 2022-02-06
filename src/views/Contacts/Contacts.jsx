import Filter from './Filter/Filter';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import s from './Contacts.module.scss';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function Contacts() {
  const logget = useSelector(getIsLoggedIn);
  return (
    <>
      {logget && (
        <section className={s.phonebook}>
          <Form />
          <div className={s.contacts}>
            <h2 className={s.title}>My Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </section>
      )}
    </>
  );
}
