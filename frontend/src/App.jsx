
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import Dishes from './Pages/Dishes/Dishes';
import LoginPage from './Pages/Login/LoginPage';
import ReservationsPage from './Pages/Reservations/ReservationsPage';
import './App.css';

const App = () => {
  useEffect(() => {
    document.title = "Restaurant App";

    const link = document.createElement('link');
    const oldLink = document.querySelector('link[rel="icon"]');

    link.rel = 'icon';
    link.href = '/favicon.ico';

    if (oldLink) {
      document.head.removeChild(oldLink);
    }

    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='/dishes' element={<Dishes />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/reservations' element={<ReservationsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
