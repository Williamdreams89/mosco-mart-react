import React from 'react'
import HeaderOne from './components/Header/HeaderOne'
import "./App.css";
import HeaderTwo from './components/Header/HeaderTwo';
import Hero from './components/Main/Hero';
import ProductPage from './components/Main/ProductPage';

function App() {
  return (
    <div>
        <HeaderOne />
        <HeaderTwo />
        < Hero />
        <ProductPage />
    </div>
  )
}

export default App