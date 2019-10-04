import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import CreateCloset from './components/CreateCloset';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/utils/PrivateRoute';
import NoMatch from './components/pages/NoMatch';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/registration"
                            component={Registration}
                        />

                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/createcloset"
                            component={CreateCloset}
                        />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
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
