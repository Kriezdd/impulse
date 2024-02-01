import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './ButtonScroll.scss';

const ButtonScroll = ({ scrollTo, title }) => {
    return (
        <ScrollLink
            className="ButtonScroll"
            activeClass="active"
            smooth spy to={scrollTo}
            duration={100}
            offset={-100}
        >
            {title}
        </ScrollLink>
    );
};

export default ButtonScroll;