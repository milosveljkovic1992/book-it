import './App.css';
import React, { useContext, useState } from 'react';

import { CalendarContainer } from './containers/calendar/calendar-container';
import { PopupContainer } from './containers/popup-modal/popup-container';
import { DashboardContainer } from './containers/dashboard/dashboard-container';
import { LoginPage } from './pages';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './context';


const App = () => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <LoginPage />
  }
  return (
    <>
      <LoginPage />
      <Routes>
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Routes>
      <CalendarContainer />
      <PopupContainer />
    </>
  );
}

export default App;