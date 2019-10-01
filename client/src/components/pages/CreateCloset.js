//Add items to your closet/create new closet
import React from 'react';

function CreateCloset(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload Clothing</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
            </form>
        </div>
    )
}


export default CreateCloset;