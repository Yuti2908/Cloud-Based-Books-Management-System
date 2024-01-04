// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import App from './App';
import User from './User';
import About from './components/About';
import BookDetailPage from './BookDetailPage';
import AdminLogin from './AdminLogin';
import Admin from './Admin';
import Edit from './components/Edit';
import Add from  './components/Add';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminmain" element={<Admin />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
