import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route}from "react-router-dom";
import Home from './components/pages/Home';
import CreateCloset from './components/CreateCloset';
import axios from "axios";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Dashboard from "./components/pages/Dashboard";

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
       <Router>
          <Route exact path="/" component= { Home } />
          <Route exact path="/registration" component = { Registration } />
          <Route exact path="/login" component = { Login } />
          <Route exact path="/createcloset" component = { CreateCloset } />
          <Route exact path="/dashboard" component = { Dashboard } />
        </Router>
      <Footer />
    </div>
    );
  }
  



}

export default App;

