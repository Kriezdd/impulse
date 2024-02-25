import React, {useRef, useState} from 'react';
import './MemberCard.scss';
import MemberModal from "./MemberModal/MemberModal";

const MemberCard = ({member}) => {
    const [isDetailed, setIsDetailed] = useState(false);

    const handleMouseEnter = () => {
        setIsDetailed(prevState => !prevState)
    };

    const handleMouseLeave = () => {
        setIsDetailed(false)
    };

    function handleClick() {
        setIsDetailed(prevState => !prevState)
    }

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='MemberCard'
        >
            <div
                style={{
                    backgroundImage: `url(${member.pic})`
                }}
                className={`MemberBackground`}
            />

            <MemberModal member={member} isDetailed={isDetailed} />

            <div className={`InfoContainer ${isDetailed ? `` : `active`}`}>
                <div className="Member-MainInfo">
                    <strong>{member.name}</strong>
                    <p className="memberPos">{member.position}</p>
                </div>
            </div>

        </div>
    );
};

export default MemberCard;