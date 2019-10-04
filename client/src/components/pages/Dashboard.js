import React, { Component } from 'react';
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    state = {
        redirect: false,
        user: {}
    };

    componentDidMount() {
        const token = localStorage.getItem('styls');

        if (token) {
            setAuthToken(token);
        }

        // axios
        //     .get('/api/user')
        //     .then(response => {
        //         this.setState({
        //             user: response.data
        //         });
        //     })
        //     .catch(err => console.log(err.response));
    }

    handleLogout = () => {
        localStorage.removeItem('styls');
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
