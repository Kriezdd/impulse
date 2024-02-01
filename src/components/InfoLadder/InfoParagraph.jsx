import React from 'react';
import './InfoParagraph.scss';

const InfoParagraph = ({styleName, par, smile}) => {


    return (
        <div className={`InfoParagraph ${styleName}`}>
            <div className="TextArea">
                <h2>{par.title}</h2>
                <p>{par.description}</p>
            </div>
            <div className={`ImageArea ${styleName}`}>
                <img src={par.pic} className="ImageArea-Img" alt={`${Object.keys(par)[2]}`} />
                <img src={smile} className="ImageArea-Smile" alt="smile.png" />
            </div>
        </div>
    );
};

export default InfoParagraph;