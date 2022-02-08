import { useState } from 'react';
import { NotificationError, NotificationSuccess } from 'components/Notification';
import { useRegisterNewUserMutation } from 'redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
import s from './Register.module.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [redistrationNewUser] = useRegisterNewUserMutation();

  const handleSubmitt = async e => {
    e.preventDefault();
    try {
      await redistrationNewUser({ name, email, password }).unwrap();
      setName('');
      setEmail('');
      setPassword('');
      NotificationSuccess('success!', ' registration success!');
      navigate('/contacts', { replace: true });
    } catch (error) {
      NotificationError(error?.status, error?.data?._message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitt} className={s.form}>
        <label>
          <input
            className={s.name}
            type="text"
            name="name"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            className={s.name}
            type="email"
            name="email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            placeholder="Email"
            required
          />
        </label>
        <label>
          <input
            className={s.number}
            type="password"
            name="password"
            value={password}
            onChange={({ currentTarget: { value } }) => setPassword(value)}
            placeholder="Password"
            autoComplete="false"
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Join
        </button>
      </form>
    </>
  );
}
