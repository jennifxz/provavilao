import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Adcvilao from '././pages/adcvilao'
import CstVilao from './pages/cstvilao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Adcvilao/>}>Consultar Vilões</Route>
      <Route path='/consultar' element= {<CstVilao/>}>Consultar Vilões</Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

