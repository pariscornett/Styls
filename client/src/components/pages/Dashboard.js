import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { Redirect} from 'react-router-dom';
import { relative } from 'path';

const styles = {
    dashOptionAdd: {
        position: "fixed",
        height: "500px",
        border: "5px solid black",
        left: "300px",
        display: "inline",
        padding: 10,
        margin: 20,
        backgroundColor: "#bcd2d9"
    },
    dashOptionView: {
        position: "fixed",
        height: "500px",
        border: "5px solid black",
        left: "800px",
        display: "inline",
        padding: 10,
        margin: 20,
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
            <div className="container" style={styles.container}>
                <div
                className="dashOptions"
                style={styles.dashOptionAdd}
                onClick={this.handleAddClosetClick}>Add to closet
                <img src="./assets/images/add.png" style={styles.add}/>
                </div>
                <div
                className="dashOptions"
                style={styles.dashOptionView}
                onClick={this.handleViewClosetClick}>View Closet
                <img src="./assets/images/magnifying-glass.png" />
                </div>      
            </div>
        );
    }
}

export default Dashboard;