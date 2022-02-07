import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth/authOperation';
import { getUserName } from 'redux/auth/authSelectors';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const [out] = useLogOutUserMutation();
  const navigate = useNavigate();

  return (
    <>
      <div className={s.menu}>
        <h2 className={s.name}>{userName}</h2>
        <button
          type="button"
          onClick={() => {
            out();
            navigate('/login', { replace: true });
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
}
