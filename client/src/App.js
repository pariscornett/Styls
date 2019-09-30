import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Registration from './components/pages/Registration';


function App() {

  return (
    
    <div className="App">
      <Navbar />
        <h1>Root Page</h1>
        <Registration />
      
      <Footer />
    </div>
  );
}

export default App;
