import React from 'react';
import './App.css';

import CreateCloset from './components/CreateCloset';
import axios from "axios";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Login from './components/pages/Login';

class App extends React.Component {
state={
  user:{}
}
  componentDidMount(){
    axios.get("/api/user/current/")
    .then(res => {
      this.setState({
        user:res.data
      })
    })
}
  render(){
    return (
      <div className="App">
      <Navbar />
        <img src="./assets/images/styls.png" alt="Styls Logo" />
        <CreateCloset />
      <Footer />
    </div>
    );
  }
  



}

export default App;

