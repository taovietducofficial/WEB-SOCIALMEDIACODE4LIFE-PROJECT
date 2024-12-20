import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import adminRoutes from './routers/admin';
import userRoutes from './routers/user';
import instructorRoutes from './routers/instructor';
import Navbar from './components/Navbar';
import Login from './page/user/Login';
import Signup from './page/user/Signup';

const NavbarVisibility = () => {
  const location = useLocation();
  // Return null if the path is Login or Signup, otherwise render Navbar
  return location.pathname !== '/' && location.pathname !== '/signup' ? <Navbar /> : null;
};

const App = () => {
  return (
    <Router>
      <NavbarVisibility />  {/* Move Navbar logic to this component */}
      
      <div className="mt-16"> {/* Add margin-top to account for fixed navbar */}
        <Routes>
          {adminRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          {userRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          {instructorRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}

          {/* Define route for Login and Signup */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
