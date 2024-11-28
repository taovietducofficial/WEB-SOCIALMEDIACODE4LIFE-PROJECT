import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './router/admin';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="w-full">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
              })}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
