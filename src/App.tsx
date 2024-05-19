// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/common/Header/Header';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import Comics from './views/Comics/Comics';

const AppContent: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;

