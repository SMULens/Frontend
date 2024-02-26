// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Profile from "./pages/Profile"
import ListOfUsers from "./pages/ListOfUsers"
import CreateUser from './pages/CreateUser';
import Nav from './components/Nav';
import Footer from './components/Footer';

import StudentCardList from './components/StudentCardList';
import Filter from './components/Filter';

const App = () => {
  // Mock user state
  const user = {
    role: 'ACC', // or 'ACC'
    name: 'ACC'
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
          <Filter/>
          <StudentCardList/>
          <Footer/>
      </div>
    </Router>
  );
};

export default App;
