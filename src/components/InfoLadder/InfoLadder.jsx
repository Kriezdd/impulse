import React from 'react';
import InfoParagraph from "./InfoParagraph";

const InfoLadder = ({info}) => {
    const smiles = require.context('../../images/smile_icons', false);
    const smileList = smiles.keys().map(smile => smiles(smile));

    const projectInfo = [...info];
    console.log(smileList[1])

    return (
        <div className="InfoLadder wrapper gaps">
            {
                projectInfo.map((par, index) => (
                   <InfoParagraph
                       styleName={index % 2 ? 'right' : 'left'} par={par} smile={smileList[index%4]} key={index}/>
                ))
            }
        </div>
    );
};

export default InfoLadder;