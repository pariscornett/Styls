import React from 'react';
import './App.css';
import CreateCloset from './components/CreateCloset';
import axios from "axios";


class App extends React.Component {
state={
  user:{

  }
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
      <h1>Root Page</h1>
      <CreateCloset />
      </div>
    );
  }
  
}

export default App;
