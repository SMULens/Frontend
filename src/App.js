// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Profile from "./pages/Profile"
import ListOfUsers from "./pages/ListOfUsers"
import CreateUser from './pages/CreateUser';
import Nav from './components/Nav';

const App = () => {
  // Mock user state
  const user = {
    role: 'admin', // or 'ACC'
    name: 'Admin'
  };

  return (
    <Router>
      <div>
        <Nav user={user} />
        <Routes>
          <Route path="/profile" component={Profile} />
          <Route path="/list-of-users" component={ListOfUsers} />
          <Route path="/create-user" component={CreateUser} />
        
          </Routes>
      </div>
    </Router>
  );
};

export default App;
