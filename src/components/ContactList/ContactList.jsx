import { useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import { useGetContactsQuery } from '../../redux/contact/contact-operation';
import { TailSpin } from 'react-loader-spinner';
import { getFilter } from '../../redux/contact/contact-selectors';
import { useMemo } from 'react';

import s from './ContactList.module.scss';

export default function ContactList() {
  const { data, isFetching, isError } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);

  const filter = useMemo(() => {
    if (!data) {
      return;
    }
    const normalizeFilter = filterValue.toLowerCase();
    return data.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));
  }, [data, filterValue]);

  return (
    <>
      {isFetching && (
        <TailSpin
          heigth="50"
          width="50"
          color="#00BFFF"
          ariaLabel="loading"
          wrapperClass={s.loding}
        />
      )}
      {data && (
        <ul className={s.list}>
          <ContactItem contacts={filter} />
        </ul>
      )}
      {isError && <h2>Sorry, try later...</h2>}
    </>
  );
}
