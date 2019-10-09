import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const styles = {
    navigation: {
        backgroundColor: "#ffffff"
    },
    links: {
        color: "#c6a52f"
    }
}

class Navbar extends Component {
    state = {
        redirect: false,
        user: {}
    };

    // "navbar navbar-expand-lg navbar-light bg-light"
    // {`navbar navbar-expand-lg navbar-light bg-light ${css(styles.navigation)}}`}

    handleLogout = () => {
        localStorage.removeItem('styls');
        this.props.removeUserLogin();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={styles.navigation}>
                <div className="navbar-brand">STYLS</div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={styles.links}>
                                Home
                            </Link>
                        </li>
                        {
                            this.props.isLoggedIn ? ( <li className="nav-item" onClick={this.handleLogout}> <Link className="nav-link" to="/" style={styles.links} >Logout</Link></li>) : (   <li className="nav-item">
                            <Link className="nav-link" to="/login" style={styles.links}>
                                Login
    
                            </Link>  </li>)
                        }
    
                        <li className="nav-item">
                            <Link className="nav-link" to="../dashboard" style={styles.links}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="../pages/Settings">
                      Settings
                    </Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    
};

export default Navbar;