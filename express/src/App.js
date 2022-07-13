import './App.css';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';


function App() {



  return (
    <div className="App">
      <Header />
      <Navigation />
      <h2>Make a selection above to do stuff.</h2>
    </div>
  );
}

export default App;

