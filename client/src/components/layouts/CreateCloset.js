//Add items to your closet/create new closet
import React from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
    logo : {
        position: "relative",
        left: "270px",
        top: "-150px"
    },
    form: {
        position:"relative",
        top: "-250px",
        textAlign: "center",
        color:"#c6a52f",
        left: "-30px"
    },
    submitButton: {
        backgroundColor: "#bcd2d9",
        border: "1px solid #c6a52f",
        color: "black"
    }
}

class CreateCloset extends React.Component{
    state= {
        img: '',
        selectedFile:null,
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            description:'',
            category:'',
        });
    };

    onChange= e => {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('recfile', this.state.selectedFile);
        data.append('description', this.state.description);
        data.append('category', this.state.category);
        console.log(data);
        axios
            .post('upload', data)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err.response));
    };

    render(){

        return (
            <Container>
            <Row>
                <img src="./assets/images/STYLS.png" style={styles.logo} />
            </Row>
            <Row>
                <Col md={{span:6, offset:3}}>
                        <form className="form-group" style={styles.form}>
                            <label htmlFor="exampleFormControlFile1"><h2>Upload an item to your Closet:</h2></label>
                            <br />
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" name="recfile" onChange={this.onChangeHandler}/>
                            <br />
                            <input placeholder="description..." type="text" className="form-control-file" id="exampleFormControlFile1" name="description" onChange={this.onChange}/>
                            <br />
                            {/* <input placeholder="category..." type="text" className="form-control-file" id="exampleFormControlFile1" name="category" onChange={this.onChange}/> */}
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1" name="category">Category select</label>
                                <select className="form-control-file" id="exampleFormControlSelect1" name="category" onChange = {this.onChange}>
                                <option className="page-item-disabled"></option>
                                <option name="top">Top</option>
                                <option name="bottom">Bottom</option>
                                <option name="one-piece">One Piece</option>
                                <option name="footwear">Footwear</option>
                                <option name="outerwear">Outerwear</option>
                                <option name="accessory">Accessory</option>
                                </select>
                            </div>
                            <br />
                            <button className="btn btn-primary" 
                            onClick={this.onClickHandler}
                            style={styles.submitButton}
                            >Submit</button>
                        </form>
                </Col>
            </Row>
        </Container>
            
        )
    }
}
export default CreateCloset;