import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

import './App.css'
import HomePage from './Pages/HomePage/HomePage';
import NewToday from './Pages/NewToday/NewToday';
import Ourservices from './Pages/OurServices/Ourservices';
import Feedbackus from './Pages/Feedbackus/Feedbackus';
import Footer from './Pages/Footer/Footer';
import Backgroundimg from './Component/Backgroundimg/Backgroundimg';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import CreateNewPassword from './Pages/CreateNewPassword/CreateNewPassword';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/newtoday' element={<NewToday />} />
        <Route path='/ourservices' element={<Ourservices />} />
        <Route path='/feedback' element={<Feedbackus />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/bgg' element={<Backgroundimg />} /> */}

        <Route path='/loginpage' element={<LoginPage />} />
        <Route path='/regterpage' element={<RegisterPage />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/createnewpassword' element={<CreateNewPassword />} />
      </Routes>

    </>
  )
}

export default App
