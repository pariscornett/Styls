import React, { Component } from "react";

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
        console.log("handle change", event);
      
        const {name, value} = event.target;
    
        this.setState({
          [name]:value
        });
    };
    
    handleSubmit = (event) => {
        console.log("form submited");
        event.preventDefault();
    }
    
    render() {
        return (<div> 
            <h1>Register with Styls</h1>
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