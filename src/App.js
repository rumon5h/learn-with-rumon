import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
