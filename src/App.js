import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import  { Toaster } from 'react-hot-toast';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
     <Toaster/>
    </div>
  );
}

export default App;
