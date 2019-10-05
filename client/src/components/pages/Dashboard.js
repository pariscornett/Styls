import React, { Component } from 'react';
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import CreateCloset from '../layouts/CreateCloset';
import DisplayCloset from '../layouts/DisplayCloset';


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
                <CreateCloset />
                <hr />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h2>Check out items in your Closet:</h2>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <DisplayCloset />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Dashboard;