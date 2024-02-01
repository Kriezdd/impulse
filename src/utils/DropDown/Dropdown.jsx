import React, {useState} from 'react';
import {Link as ScrollLink} from 'react-scroll'
import './Dropdown.scss';

const Dropdown = ({name, address}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Dropdown"
             onMouseEnter={() => setIsOpen(!isOpen)}
             onMouseLeave={() => setIsOpen(!isOpen)}>
            <ScrollLink
                classname="Dropdown-article"
                activeClass="active"
                smooth spy to={address}
                duration={100}
                offset={-100}
            >
                {name}
            </ScrollLink>
            {isOpen && <div className="Dropdown-content">
                {isOpen && <div className="Dropdown-option">Импульс</div>}
                {isOpen && <div className="Dropdown-option">Лиги</div>}
            </div>}
        </div>
    );
};

export default Dropdown;