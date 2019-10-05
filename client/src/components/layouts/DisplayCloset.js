// Micaela's code:
// import React, { Component } from 'react';

// // const styles = {
// //     h2: {
// //         textAlign: 'center'
// //     }
// // }

// class DisplayCloset extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div className="card" style={{width: "18rem"}}>
//                     <img src="..." className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//                 </div>
                
//             </div>
//         )
//     }
// }

// export default DisplayCloset;



//Alec's code
import React from 'react';
import axios from 'axios';

class DisplayCloset extends React.Component {
    state = {
        img: '',
        selectedFile: null
    };
    // onChangeHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0],
    //         loaded: 0
    //     });
    // };
    // onClickHandler = () => {
    //     const data = new FormData();
    //     data.append('recfile', this.state.selectedFile);
    //     axios
    //         .post('/upload', data)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(err => console.log(err.response));
    // };
    getImage = () => {
        const id = '5d98db51e58a744a385c8b53';
        axios.get(`/photo/${id}`).then(data => {
            console.log(data.data);
            const base64Flag = 'data:image/jpeg;base64,';
            const imageStr = this.arrayBufferToBase64(data.data.image.data);
            this.setState({
                img: base64Flag + imageStr
            });
        });
    };
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(b => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    }
    render() {
        return (
            <div className="DisplayCloset">              
                <button onClick={this.getImage}>Get Closet Item Image</button>
                {this.state.img ? (
                    <img
                        style={{ height: 300 }}
                        src={this.state.img}
                        alt="Helpful alt text"
                    />
                ) : (
                    'no image'
                )}
            </div>
        );
    }
}
export default DisplayCloset;