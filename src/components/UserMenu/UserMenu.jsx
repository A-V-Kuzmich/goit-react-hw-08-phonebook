import { useSelector } from 'react-redux';
import { useLogOutUserMutation } from 'redux/auth/auth-operation';
import { getUserName } from 'redux/auth/auth-selectors';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const [out] = useLogOutUserMutation();

  return (
    <>
      <div className={s.menu}>
        <h2 className={s.name}>{userName}</h2>
        <button type="button" onClick={() => out()}>
          Log out
        </button>
      </div>
    </>
  );
}
