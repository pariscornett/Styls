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
            <h1>This starts the "Top" Componenet</h1>

             {props.user.clothingItems &&
                    props.user.clothingItems.map(item => ( 
                        <div>
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