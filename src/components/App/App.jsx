import Navigation from 'components/Navigation/Navigation';
import Contacts from 'views/Contacts/Contacts';
import Home from 'views/Home/Home';
import Login from 'views/Login';
import Register from 'views/Register';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <Navigation />
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
