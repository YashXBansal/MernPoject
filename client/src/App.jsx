import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import About from './Pages/About';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
