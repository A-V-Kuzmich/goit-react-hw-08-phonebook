import Home from 'components/views/Home';
import Login from 'components/views/Login';
import Contacts from 'components/views/Contacts';
import Register from 'components/views/Register';
import NavigationBar from 'components/NavigationBar';
import React, { useEffect } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useCurrentUserQuery } from 'redux/auth/authOperation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

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
          <Route path="/contacts" element={<PrivateOutlet />}>
            <Route path="" element={<Contacts />} />
          </Route>
          <Route path="/register" element={<PublicOutlet />}>
            <Route path="" element={<Register />} />
          </Route>
          <Route path="/login" element={<PublicOutlet />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route path="*" elements={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
function PublicOutlet() {
  const auth = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/contacts" />;
}
function useAuth() {
  const logget = useSelector(getIsLoggedIn);
  return logget;
}
