import Contacts from 'views/Contacts/Contacts';
import Home from 'views/Home/Home';
import Login from 'views/Login';
import Register from 'views/Register';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useCurrentUserQuery } from 'redux/auth/authOperation';

// import s from './App.module.scss';

export default function App() {
  const { refetch } = useCurrentUserQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}
