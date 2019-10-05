import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            email: '',
            password: '',
            error: {}
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('styls');

        if (authenticate(token)) {
            console.log('hi');
            this.setState({
                redirect: true
            });
        }
    }

    handleLoginUser = () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        // logs user in through auth route
        axios
            .post('/api/user/login', user)
            .then(response => {
                if (response.data.token) {
                    const { token } = response.data;

                    localStorage.setItem('styls', token);
                    setAuthToken(token);
                    this.props.addUserLogin();
                    this.setState({
                        redirect: true,
                        errors: {}
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: err.response
                });
            });
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
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
                        <div className="Login">
                            <h2 style={{ margin: '30px auto' }}>
                                Login with Styls
                            </h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        className="form-control"
                                        type="email"
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
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block"
                                    disabled={!this.validateForm()}
                                    onClick={() =>
                                        this.handleLoginUser(
                                            this.state.email,
                                            this.state.password
                                        )
                                    }
                                >
                                    Login
                                </button>
                            </form>
                            {this.state.error ? (
                                <p
                                    style={{
                                        fontSize: '0.8rem',
                                        color: '#cc0000',
                                        marginTop: 10
                                    }}
                                >
                                    {this.state.error.msg}
                                </p>
                            ) : (
                                ''
                            )}
                            <p style={{ marginTop: 30, fontsize: '0.8rem' }}>
                                Not registered?{' '}
                                <Link to="/registration"> Sign up </Link> now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;