import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}>
      HomePage
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}
    >
      contacts
    </NavLink>
    <NavLink
      to="/register"
      className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}
    >
      register
    </NavLink>
    <NavLink to="/login" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}>
      login
    </NavLink>
  </nav>
);
export default Navigation;
