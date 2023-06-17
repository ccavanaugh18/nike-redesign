import React from 'react';
import './styles/global.css';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Sales from './components/new-products.jsx';
import SalesCont from './components/popular-products.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Sales />
        <SalesCont />
        <Footer />
      </main>
    </div>
  );
}

export default App;
