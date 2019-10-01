import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Login from './components/pages/Login';
import CreateCloset from './components/pages/CreateCloset';


function App() {

  return (
    
    <div className="App">
      <Navbar />
        <img src="./assets/images/styls.png" alt="Styls Logo" />
        <CreateCloset />
      <Footer />
    </div>
  );
}

export default App;

