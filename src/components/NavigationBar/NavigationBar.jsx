import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './NavigationBar.module.scss';
import NavigationAuth from './NavigationAuth';

export default function NavigationBar() {
  const logget = useSelector(getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}>
          HomePage
        </NavLink>

        {logget && (
          <NavLink
            to="/contacts"
            className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}
          >
            contacts
          </NavLink>
        )}
      </div>
      {!logget && <NavigationAuth />}

      {logget && <UserMenu />}
    </nav>
  );
}
