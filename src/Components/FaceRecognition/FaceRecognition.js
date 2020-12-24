import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
    return (
        <div className="flex items-center justify-center ma ">
            <div className="relative mt4">
                <img src={props.imageUrl} alt="" className="dimension container shadow-3" id="inputimage"/>
                <div className="bounding-box" style={{top: props.box.topRow, right:props.box.rightCol, bottom: props.box.bottomRow, left: props.box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;