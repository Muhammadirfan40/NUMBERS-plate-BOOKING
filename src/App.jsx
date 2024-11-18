import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

import './App.css'
import HomePage from './Pages/HomePage/HomePage';
import NewToday from './Pages/NewToday/NewToday';
import Ourservices from './Pages/OurServices/Ourservices';
import Feedbackus from './Pages/Feedbackus/Feedbackus';
import Footer from './Pages/Footer/Footer';
import Backgroundimg from './Component/Backgroundimg/Backgroundimg';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newtoday' element={<NewToday />} />
        <Route path='/ourservices' element={<Ourservices />} />
        <Route path='/feedback' element={<Feedbackus />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/bgg' element={<Backgroundimg />} />
      </Routes>

    </>
  )
}

export default App
