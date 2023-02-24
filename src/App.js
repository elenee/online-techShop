import React from 'react'
import './App.css'; 
import NavBar from './components/header/NavBar';
import ProductsList from './components/products/ProductsList';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductsList />
    </React.Fragment>
  );
}

export default App;
