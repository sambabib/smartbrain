import React from 'react'
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return (
        <div>
            <p className="f4 tc">This Badass Brain will detect faces in your photo. Give it a shot!</p>
            <div className="flex justify-center">
                <div className="flex w-80 h4 items-center shadow-3 pattern">
                    <input className="f5 pl3 w-60 h3 center ba b--blue" type="text" placeholder="Paste image url here" onChange={props.onInputChange}/>
                    <button className="w-30 grow f5 mr3 bold pa3 h3 link light-blue bg-blue bn" onClick={props.onButtonClick}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
