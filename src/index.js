import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ContactPage from '../src/routes/ContactPage'
import AboutPage from './routes/AboutPage';
import DevPage from './routes/DevPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/dev' element={<DevPage/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);