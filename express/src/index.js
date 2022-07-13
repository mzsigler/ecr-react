import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,
Routes,
Route } from 'react-router-dom';
import TaxCalc from './TaxCalc';
import AddCar from './AddCar';
import BalanceDue from './BalanceDue';
import ViewCars from './ViewCars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<App />}/>
    <Route path="/taxCalc" element={<TaxCalc />}/>
    <Route path="/addCar" element={<AddCar />}/>
    <Route path="/viewCars" element={<ViewCars />}/>
    <Route path="/balDue" element={<BalanceDue />}/>

   </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
