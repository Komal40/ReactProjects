import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/organisms/Pages/Login/Login';
import Home from './components/organisms/Pages/Home/Home';
import About from './components/organisms/Pages/About/About';
import Contact from './components/organisms/Pages/Contact/Contact';
import Register from './components/organisms/Pages/Register/Register';

function App() {
  return (
   
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
   
  );
}

export default App;


