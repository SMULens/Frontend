// App.js
import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import Profile from "./pages/Profile"
import ListOfUsers from "./pages/ListOfUsers"
import CreateUser from './pages/CreateUser';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AccHome from './pages/AccHome';
import StudentDetails from './pages/StudentDetails';

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
          <Route path="/profile" element={<Profile/>} />
          <Route path="/list-of-users" element={<ListOfUsers/>} />
          <Route path="/create-user" element={<CreateUser/>} />
          <Route path="/acchome" element={<AccHome/>}/>
          <Route path="/studentCourses/:id" element={<StudentDetails/>}/>
          </Routes>
          
          <Footer/>
      </div>
    </Router>
  );
};

export default App;
