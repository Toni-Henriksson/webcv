import './css/App.css';
import { React } from 'react';
import { Routes, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import UrlProfile from './screens/UrlProfile';
import PageNotFound from './screens/PageNotFound';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="/:username" element={<UrlProfile />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
