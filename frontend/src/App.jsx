import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import adminRoutes from './routers/admin';
import userRoutes from './routers/user';
import instructorRoutes from './routers/instructor';  // Corrected path
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
