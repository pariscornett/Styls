import React from 'react';
import axios from 'axios';
import Top from './Top';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
    carousel: {
        position: "relative",
        top: "-300px",
        left: "355px"
    },
    logo : {
        position: "relative",
        left: "270px",
        top: "-150px"
    }
   
}
class DisplayCloset extends React.Component {
    state = {
        user: {},
        selectedFile: null
    };

    componentDidMount() {
        // verify logged in user
        axios.get('/api/user/current').then(res => {
            this.setState({
                user: res.data
            });
        });
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(b => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    }

    makeImageStr = imageBuffer => {
        const base64Flag = 'data:image/jpeg;base64,';
        const imageStr = this.arrayBufferToBase64(imageBuffer.data);
        return base64Flag + imageStr;
    };



    render() {
        const { clothingItems } = this.state.user;
        return (
            // <div className="DisplayCloset">
            //     {clothingItems &&
            //             clothingItems.map(item => (
            //             <div>
            //                 <p>Category: {item.category}</p>
            //                 <p>Description: {item.description}</p>
            //                 {/* load image here */}





            //                 <div className="card">
            //                     <img
            //                         style={{height: 200, width:100}}
            //                         alt="clothing item"
            //                         src={this.makeImageStr(item.image)}
            //                         className="card-img-top"
            //                     />
            //                 </div>
                           
            //             </div>
            //         ))}
                // <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Top"/>
                // <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Bottom"/>
                // <Top user={this.state.user} makeImageStr={this.makeImageStr} type="One Piece"/>
                // <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Footwear"/>
                // <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Outerwear"/>
                // <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Accessory"/>
            // </div>

            <div>
            <Container>
                <Row>
                    <img src="./assets/images/STYLS.png" style={styles.logo} />
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Carousel clothingItems={this.props.clothingItems} style={styles.carousel}>
                            {clothingItems && clothingItems.map(item =>  <Carousel.Item>
                                <img
                                style={styles.imageStyle}
                                className="d-block w-10"
                                src={this.makeImageStr(item.image)}
                                alt={item.description}
                                /> 
                                    <Carousel.Caption>
                                {/* <h3>Category: {item.category}</h3>
                                <p>Description: {item.description}</p> */}
                                </Carousel.Caption>
                                {/* <div>
                                <p>Category: {item.category}</p>
                                <p>Description: {item.description}</p>
                                </div> */}
                                </Carousel.Item>
                                )}
                        </Carousel>
                    </Col>
                </Row>
  
            </Container>
         
            </div>


         
        
        );
    }
}
export default DisplayCloset;
