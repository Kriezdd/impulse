import React, {useRef, useState} from 'react';
import './MemberCard.scss';
import MemberModal from "./MemberModal/MemberModal";

const MemberCard = ({member}) => {
    const [isDetailed, setIsDetailed] = useState(false);

    const timeoutIdRef = useRef();

    const handleMouseEnter = () => {
        // Clear the timeout if the mouse re-enters before the timeout completes
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = null;
        }
        setTimeout(() => setIsDetailed(true), 50)

    };

    const handleMouseLeave = () => {
        // Set a timeout to perform an action after the mouse leaves the element
        timeoutIdRef.current = setTimeout(() => {
            setIsDetailed(false);
        },  500);
    };


    let memberClass;
    isDetailed ? memberClass = 'Detailed' : memberClass = 'Default';

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`MemberCard ${memberClass}`}
        >
            <div
                style={{
                    backgroundImage: `url(${member.pic})`
                }}
                className={`MemberBackground`}
            />
            <div className={`InfoContainer ${isDetailed ? 'InfoContainer--disabled' : ''}`}>
                <div className="Member-MainInfo">
                    <strong>{member.name}</strong>
                    <p className="memberPos">{member.position}</p>
                </div>
            </div>
            {
                isDetailed ?
                    <MemberModal member={member}/>
                    : null
            }
        </div>
    );
};

export default MemberCard;