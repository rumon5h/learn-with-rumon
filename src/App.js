import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
     <Toaster/>
    </div>
  );
}

export default App;
