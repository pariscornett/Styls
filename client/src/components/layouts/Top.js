import React from 'react';
import { Link } from 'react-router-dom';

function Top(props) {

    // makeImageStr = imageBuffer => {
    //     const base64Flag = 'data:image/jpeg;base64,';
    //     const imageStr = this.arrayBufferToBase64(imageBuffer.data);
    //     return base64Flag + imageStr;
    // };

    return (
        <div>
            <br/><br/>

             {props.user.clothingItems &&
                    props.user.clothingItems.filter(item => (item.category==props.type)).map(item => (
                        <div>
                            <h1>Type: {item.category}</h1>
                            <p>Category: {item.category}</p>
                            <p>Description: {item.description}</p>
                            {/* load image here */}

                            <img
                                style={{ height: 200 }}
                                alt="clothing item"
                                src={props.makeImageStr(item.image)}
                            />
                        </div>
                        
                ))}
        </div>


    );
}

export default Top;