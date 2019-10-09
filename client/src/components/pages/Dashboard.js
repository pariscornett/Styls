import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { Redirect} from 'react-router-dom';
import { relative } from 'path';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const styles = {
    button: {
        position: "relative",
        left: "50px",
        backgroundColor: "#bcd2d9",
        border: "1px solid #c6a52f",
        color: "black"
    },
    cardBody: {
        position: "relative",
        top: "-200px",
        width: "18rem",
        left: "200px"
    },
    cardBody2: {
        position: "relative",
        top: "-200px",
        width: "18rem",
    },
    logo: {
        position: "relative",
        left: "270px",
        top: "-150px"
    },
    add: {
        position: "relative",
        top: "100px",
        left: "-50px"
    },
    search: {
        position: "relative",
        top: "200px",
        left: "-40px"
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
            <Container>
                <Row>
                    <Col md={12}>
                        <img src="./assets/images/styls.png" style={styles.logo} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card style={styles.cardBody}>
                            <Card.Img variant="top" src="./assets/images/hanger.jpeg" />
                            <Card.Body>
                            <Button variant="primary" 
                            onClick={this.handleAddClosetClick}
                            style={styles.button}
                            >Add to Closet</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={styles.cardBody2}>
                            <Card.Img variant="top" src="./assets/images/hanger.jpeg" />
                            <Card.Body>
                            <Button variant="primary" 
                            onClick={this.handleViewClosetClick}
                            style={styles.button}
                            >Browse Closet</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/images/hanger.jpeg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
                
            </Container>

           
            
        );
    }
}

export default Dashboard;