import React from 'react';
import axios from 'axios';
import Top from './Top';
import Carousel from "react-bootstrap/Carousel";


const styles = {
    cardImage: {
        display: "block",
        position:"fixed",
        top: "200px",
        width: "250px",
        left: "550px"
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
            //           <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Top"/>
            //           <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Bottom"/>
            //           <Top user={this.state.user} makeImageStr={this.makeImageStr} type="One Piece"/>
            //           <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Footwear"/>
            //           <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Outerwear"/>
            //           <Top user={this.state.user} makeImageStr={this.makeImageStr} type="Accessory"/>
            // </div>

            <div>
            <Carousel clothingItems={this.props.clothingItems}>
                {clothingItems && clothingItems.map(item =>  <Carousel.Item>
                    <img
                    className="d-block w-10"
                    src={this.makeImageStr(item.image)}
                    alt="First slide"
                    /> 
                        <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    )}
            </Carousel>
            </div>


         
        
        );
    }
}
export default DisplayCloset;
