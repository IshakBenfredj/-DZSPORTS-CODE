import { Route, Routes } from 'react-router';

import Navbare from './components/Global/Navbare';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Footer from './components/Global/Footer';

import './App.css';

function App() {
  return (
      <>
        <Navbare />
        <Routes>
          <Route path='/dzsports/' element={<Home />} />
          <Route path='/dzsports/login' element={<Login />} />
          <Route path='/dzsports/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </>
    
  );
}

export default App;
