import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import TaxCalc from './TaxCalc';
import AddCar from './AddCar';
import ViewCars from './ViewCars';
import BalanceDue from './BalanceDue';


function App() {



  return (
    <div className="App">
      <Header />
      <Navigation />
      <h2>Make a selection above to do stuff.</h2>
      <Routes>
        <Route path="/taxCalc" element={<TaxCalc />}/>
        <Route path="/addCar" element={<AddCar />}/>
        <Route path="/viewCars" element={<ViewCars />}/>
        <Route path="/balDue" element={<BalanceDue />}/>
      </Routes>
    </div>
  );
}

export default App;

