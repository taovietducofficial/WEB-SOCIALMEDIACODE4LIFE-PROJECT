import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import adminRoutes from './router/Admin';
import userRoutes from './router/User';
import instructorRoutes from './router/Instructor';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
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
    </Router>
  )
}

export default App