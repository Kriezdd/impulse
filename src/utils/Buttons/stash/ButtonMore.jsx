import React from 'react';
import './ButtonMore.scss';

const ButtonMore = ({ handleClick, title }) => {
    return (
        <button onClick={handleClick} className="ButtonMoreInfo">
            {title}
        </button>
    );
};

export default ButtonMore;