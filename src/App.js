import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Componet/Navbar';
import { Dashboard } from './Pages/Dashboard';
import { Myadmin } from './Pages/Myadmin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/admin' element={<Myadmin />}></Route>
      </Routes >
    </>
  );
}

export default App;
