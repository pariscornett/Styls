import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
    constructor(props) {
       super(props);

       this.state = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password_confirmation: "",
          registrationErrors: ""
       }
       
    }
    
    handleChange = (event) => {
        //console.log("handle change", event);
      
        const {name, value} = event.target;
    
        this.setState({
          [name]:value
        });
    };
    
    handleSubmit = (event) => {
        console.log("form submited");
        event.preventDefault();

        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
        
        console.log(newUser);
        // logs user in through auth route
        axios
        .post("/api/user", newUser)
        .then(response => console.log(response.data))
        .catch(err => console.log(err.response.data )); 
    }
    
    render() {
        return (<div> 
            <h2>Register with Styls</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                  name="firstName" 
                  placeholder="First Name" 
                  value={this.state.firstName} 
                  onChange={this.handleChange} 
                  required 
                />

                <br />
                <br />

                <input type="text" 
                  name="lastName" 
                  placeholder="Last Name" 
                  value={this.state.lastName} 
                  onChange={this.handleChange} 
                  required 
                />

                <br />
                <br />

                <input type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={this.handleChange} 
                  required 
                />

                <br />
                <br />

                <input type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={this.handleChange} 
                  required 
                />

                <br />
                <br />

                <input type="password" 
                  name="password_confirmation" 
                  placeholder="Password confirmation" 
                  value={this.state.password_confirmation} 
                  onChange={this.handleChange} 
                  required 
                />
                <br />
                <br />

                <button type="submit">Register</button>
            </form>
        </div>);
    }
}

export default Registration;