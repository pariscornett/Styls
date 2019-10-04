//Add items to your closet/create new closet
import React from 'react';
import axios from 'axios';


class  CreateCloset extends React.Component{
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
        axios
            .post('/upload', data)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err.response));
    };

    render(){

        return (
                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload Clothing</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="recfile" onChange={this.onChangeHandler}/>
                    <input placeholder="description..." type="text" className="form-control-file" id="exampleFormControlFile1" name="description" onChange={this.onChange}/>
                    <input placeholder="category..." type="text" className="form-control-file" id="exampleFormControlFile1" name="category" onChange={this.onChange}/>
                    
                    <button className="btn btn-primary" onClick={this.onClickHandler}>submit</button>
                </div>
        )
    }
}
export default CreateCloset;