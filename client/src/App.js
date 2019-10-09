import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import CreateCloset from './components/layouts/CreateCloset';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/utils/PrivateRoute';
import NoMatch from './components/pages/NoMatch';
import jwtDecode from 'jwt-decode';
import setAuthToken from './components/utils/setAuthToken';
import DisplayCloset from './components/layouts/DisplayCloset';
import 'bootstrap/dist/css/bootstrap.min.css';

// Persistent Login
if (localStorage.styls) {
    setAuthToken(localStorage.styls);

    const decoded = jwtDecode(localStorage.styls);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
    }
}



class App extends React.Component {
    state = {
        isLoggedIn: false
    };

    addUserLogin = () => {
        console.log('CheckUserLogin ran');
        this.setState({
            isLoggedIn: true
        });
    };

    removeUserLogin = () => {
        this.setState({
            user: {},
            isLoggedIn: false
        });
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar isLoggedIn={this.state.isLoggedIn}
                            removeUserLogin={this.removeUserLogin} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/registration"
                            component={Registration}
                        />

                        <Route
                            exact
                            path="/login"
                            component={() => (
                                <Login addUserLogin={this.addUserLogin} />
                            )}
                        />
                        <Route
                            exact
                            path="/createcloset"
                            component={CreateCloset}
                        />
                         <Route
                            exact
                            path="/viewcloset"
                            component={DisplayCloset}
                        />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={() => (
                                <Dashboard
                                />
                            )}
                        />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
