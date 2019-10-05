import React, { Component } from 'react';
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import axios from "axios";

class Dashboard extends Component {
    
    state = {
        redirect: false,
        test: true,
        user: {},
       
    };

    componentDidMount() {
        const token = localStorage.getItem('styls');

        if (token) {
            setAuthToken(token);
        }
    }

    handleLogout = () => {
        localStorage.removeItem('styls');
        this.props.removeUserLogin()
        this.setState({
            redirect: true
        });
    };


    render() {
        const { redirect, user } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h1> Dashboard</h1>
                <button className="btn btn-primary" onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
        );
    }
}

export default Dashboard;
