import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: '',
            redirect: false,
        };
    }

    componentDidMount() {
        if (localStorage.styls) {
            setAuthToken(localStorage.styls);
            // decode token and get user info
            const decoded = jwtDecode(localStorage.styls);
            // check for expired token
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                localStorage.removeItem('styls');
            } else {
                window.location.href = '/dashboard';
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };

        //console.log(newUser);
        // logs user in through auth route
        axios
            .post('/api/user', newUser)
            .then(response => {
                this.setState({
                    redirect: true
                })
                //this.props.history.push('/login')
            })
            .catch(err => console.log(err.response.data));
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2 style={{ margin: '30px auto' }}>
                            Register with Styls
                        </h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password_confirmation">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password_confirmation"
                                    placeholder="Password confirmation"
                                    value={this.state.password_confirmation}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Register
                            </button>
                        </form>
                        <p style={{ marginTop: 30, fontsize: '0.8rem' }}>
                            Already registered? <Link to="/login"> Login </Link>{' '}
                            now.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;