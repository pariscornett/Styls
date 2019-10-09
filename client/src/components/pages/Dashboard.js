import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { Redirect, Link} from 'react-router-dom';
import CreateCloset from '../layouts/CreateCloset';
import DisplayCloset from '../layouts/DisplayCloset';
import { relative } from 'path';

const styles = {
    dashOptions: {
        position: "relative",
        left: "400px",
        display: "inline",
        padding: 10,
        margin: 20,
        width: "500px",
        height: "500px",
        backgroundColor: "#bcd2d9"
    },
    add: {
        position: "relative",
        top: "100px",
        left: "-50px"
    }
}


class Dashboard extends Component {
    
    state = {
        test: true,
        user: {},
        redirect: false,
        url: ""
    };

    componentDidMount() {
        const token = localStorage.getItem('styls');

        if (token) {
            setAuthToken(token);
        }
    };

    handleAddClosetClick = (e) => {
        e.preventDefault();
        this.setState({
            redirect: true,
            url: "/createcloset"
        })
    };

    handleViewClosetClick = (e) => {
        e.preventDefault();
        this.setState({
            redirect: true,
            url: "/viewcloset"
        })
    }
    

    render() {
      
        const {redirect} = this.state;
        if(redirect) {
            return <Redirect to={this.state.url} />
        }

        return (
            <div>
                <h1>What would you like to do?</h1>
                <div
                className="dashOptions"
                style={styles.dashOptions}
                onClick={this.handleAddClosetClick}>Add to closet
                <img src="./assets/images/add.png" style={styles.add}/>
                </div>
                <div
                className="dashOptions"
                style={styles.dashOptions}
                onClick={this.handleViewClosetClick}>View Closet
                <img src="./assets/images/magnifying-glass.png" />
                </div>
                {/* <CreateCloset />
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h2>Check out items in your Closet:</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <DisplayCloset />
                        </div>
                    </div>
                </div> */}
                
            </div>
        );
    }
}

export default Dashboard;