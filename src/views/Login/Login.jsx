import { useState } from 'react';
import { NotificationSuccess, NotificationError } from '../../components/Notification';
import { useLogInUserMutation } from 'redux/auth/auth-operation';

import s from './Login.module.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logIn] = useLogInUserMutation();

  const handleSubmitt = async e => {
    e.preventDefault();
    try {
      await logIn({ email, password }).unwrap();
      setEmail('');
      setPassword('');
      NotificationSuccess('Welcome!', 'Login Successful');
    } catch (error) {
      NotificationError(error?.status, 'User data entered incorrectly');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitt} className={s.form}>
        <label>
          <input
            className={s.name}
            type="text"
            name="email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            title="Email"
            required
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className={s.number}
            type="password"
            name="password"
            value={password}
            onChange={({ currentTarget: { value } }) => setPassword(value)}
            title="password"
            required
            placeholder="Password"
            autoComplete="false"
          />
        </label>

        <button type="submit" className={s.button}>
          Sign in
        </button>
      </form>
    </>
  );
}
