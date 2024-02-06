import React, {useState} from 'react';
import './MemberCard.scss';

const MemberCard = ({member}) => {
    const [isDetailed, setIsDetailed] = useState(false);

    const handleClick = () => {
        setIsDetailed(!isDetailed);
    }

    let memberClass;
    isDetailed ? memberClass = 'Detailed' : memberClass = 'Default';

    return (
        <div onClick={isDetailed ? null : handleClick} className={`Member Card-${memberClass}`}>
            <div
                onClick={isDetailed ? handleClick : null}
                style={{
                    backgroundImage: `url(${member.pic})`
                }}
                className={`MemberBackground`}
            />
            <div className="Info-Container">
                <div className="Member-MainInfo">
                    <strong>{member.name}</strong>
                    <p>{member.position}</p>
                </div>
                {
                    isDetailed ?
                        <div className="Member-DetailedInfo">
                            <div className="DetailedInfo-ExperienceFact">
                                <p>Опыт работы: {member.moreInfo.experience}</p>
                                <p>{member.moreInfo.fact}</p>
                            </div>
                            <div className="DetailedInfo-Quote">
                                <p>{member.moreInfo.quote}</p>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

export default MemberCard;