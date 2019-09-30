import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Login from './components/pages/Login';


function App() {

  return (
    
    <div className="App">
      <Navbar />
        <h1>Root Page</h1>
        <Login />
      
      <Footer />
    </div>
  );
}

export default App;
