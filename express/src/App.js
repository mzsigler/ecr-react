import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Navigation from './Navigation';
import Display from './Display';


function App() {

  const [nav, setNav] = useState('');

  const taxCalcClick = () => {
    nav === 'taxCalc' ? setNav('') : setNav("taxCalc");
  };

  const balDueClick = () => {
    nav === 'balDue' ? setNav('') : setNav("balDue");
  };

  const addCarClick = () => {
    nav === 'addCar' ? setNav('') : setNav("addCar");
  };




  return (
    <div className="App">
      <Header />
      <Navigation taxCalcClick={taxCalcClick}
       balDueClick={balDueClick}
       addCarClick={addCarClick}/>
      <Display nav={nav}/>
    </div>
  );
}

export default App;

