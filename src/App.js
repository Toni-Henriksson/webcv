import './css/App.css';
import NavigationBar from './components/NavigationBar';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registeeer" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
