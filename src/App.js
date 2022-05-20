import './css/App.css';
import { React } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import UrlProfile from './screens/UrlProfile';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="/:username" element={<UrlProfile />} />
      </Routes>
    </div>
  );
}

export default App;
