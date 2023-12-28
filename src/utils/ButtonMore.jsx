import React from 'react';
import './ButtonMore.scss';

const ButtonMore = ({title}) => {
    return (
        <button className="moreInfo">
            {title}
        </button>
    );
};

export default ButtonMore;