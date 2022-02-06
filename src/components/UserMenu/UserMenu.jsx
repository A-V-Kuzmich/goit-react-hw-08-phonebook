import { useSelector } from 'react-redux';
import { useLogOutUserMutation } from 'redux/auth/authOperation';
import { getUserName } from 'redux/auth/authSelectors';
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
