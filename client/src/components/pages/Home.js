import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
    logo : {
        position: "relative",
        left: "270px",
        top: "-150px"
    }
}

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <img src="./assets/images/STYLS.png" style={styles.logo} />
                </Row>
            </Container>
          
        )
    }
}

export default Home
