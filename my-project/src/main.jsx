import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import FullStack from './Component/Paid-Course/FullStack.jsx';
import AppDevelopment from './Component/Paid-Course/AppDevelopment.jsx';
import FundamentalCourse from './Component/Paid-Course/FundamentalCourse.jsx';
import SystemDesgin from './Component/Paid-Course/SystemDesgin.jsx';
import DataAlgorithm from './Component/Paid-Course/DataAlgorithm.jsx';
import Home from './Component/Home/Home.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Privcay from './Component/Privacy/Privcay.jsx';
import Signup from './Component/Form/Signup/Signup.jsx';
import Login from './Component/Form/Login/Login.jsx';
import CreateProfile from './Component/Profile/CreateProfile.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/app" element={<AppDevelopment />} />
        <Route path="/fundamental" element={<FundamentalCourse />} />
        <Route path="/system" element={<SystemDesgin />} />
        <Route path="/algorithm" element={<DataAlgorithm />} />
        <Route path="/privacy"  element={<Privcay/>}/>
        <Route path='/signup'   element={<Signup/>}/>
        <Route path='/login'   element={<Login/>}/>
        <Route path='/profile' element={<CreateProfile/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>

  </StrictMode>,
)
