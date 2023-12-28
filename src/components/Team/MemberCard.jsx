import React from 'react';
import './MemberCard.scss';

const MemberCard = ({member}) => {
    return (
        <div className="MemberCard">
            <img src={member.pic} alt={`pic-${Date.now()}`}/>
            <div className="member-info">
                <strong>{member.name}</strong>
                <p>{member.position}</p>
            </div>
        </div>
    );
};

export default MemberCard;