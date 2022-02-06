import { NavLink } from 'react-router-dom';
import s from './NavigationBar.module.scss';

export default function NavigationAuth() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}
      >
        register
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}>
        login
      </NavLink>
    </div>
  );
}
