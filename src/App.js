import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Componet/Navbar';
import { Dashboard } from './Pages/Dashboard';
import { Myadmin } from './Pages/Myadmin';
import { About } from './Pages/About';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/admin' element={<Myadmin />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes >
    </>
  );
}

export default App;
