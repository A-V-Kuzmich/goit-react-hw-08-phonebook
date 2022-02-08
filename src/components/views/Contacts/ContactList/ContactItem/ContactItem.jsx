import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contact/contact-operation';
import s from './ContactItem.module.scss';

export default function ContactItem({ contacts }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      <span className={s.name}>
        <span className="material-icons">account_circle</span>
        {name}:{' '}
      </span>
      <div>
        <span className={s.number}>{number}</span>
        <button
          id={id}
          type="button"
          className={s.button}
          onClick={() => {
            deleteContact(id);
          }}
          disabled={isDeleting}
        >
          Delete
        </button>
      </div>
    </li>
  ));
}
ContactItem.propTypes = {
  contacts: PropTypes.array,
};
