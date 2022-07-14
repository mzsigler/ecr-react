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

  const [cars, setCars] = useState([]);
  const [customer, setCustomer] = useState([]);
  


  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/taxCalc" element={<TaxCalc />}/>
        <Route path="/addCar" element={<AddCar cars={cars} setCars={setCars}/>}/>
        <Route path="/viewCars" element={<ViewCars />}/>
        <Route path="/balDue" element={<BalanceDue 
        customer={customer} 
        setCustomer={setCustomer}/>}/>
      </Routes>
    </div>
  );
}

export default App;

