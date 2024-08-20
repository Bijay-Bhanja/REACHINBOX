import "./index.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Onebox from './components/Onebox';
import Reply from './components/Replay';
import CreateAccount from './components/CreateAccount';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <Router>
      <div>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/onebox" element={<Onebox />} />
          <Route path="/reply/:thread_id" element={<Reply />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
