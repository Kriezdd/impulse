import React from 'react';
import ButtonLink from "../../../utils/Buttons/ButtonLink/ButtonLink";
import NavigationArrows from "../../../utils/NavigationArrows/NavigationArrows";
import pic1 from "../../../images/projects/IMG_8493.png";
import pic2 from "../../../images/projects/IMG_8588.PNG";
import ysmile from "../../../images/projects/ysmile.svg";
import gsmile from "../../../images/projects/gsmile.svg";
import './InfoCard.scss';

const InfoCard = ({whichProject, changeProject}) => {

    const infoArray = [
        {
            title: 'Импульс',
            address: '/impulse',
            subTitle: 'Пятидневный проект дневного пребывания для детей школьного возраста',
            list: ['активный отдых', 'развлечение', 'обучение'],
            picture: pic1,
        },
        {
            title: 'Лиги',
            address: '/leagues',
            subTitle: 'Еженедельные занятия, направленные на развитие личностных навыков SOFT-skills',
            list: ['комфортное пространство', 'единое сообщество', 'индивидуальный подход'],
            picture: pic2,
        }
    ]

    function generateList(whichProject) {
        const listItems = infoArray[whichProject]['list'].map((d) => <li key={d}>{d}</li>)
        return listItems;
    }


    return (
        <div className="InfoCard">
            <img className="Smile__green" src={ gsmile } alt="gsmile"/>
            <img className="Smile__yellow" src={ ysmile } alt="ysmile"/>
            <img className="InfoCard-Picture" src={ infoArray[whichProject]['picture'] } alt='pic'/>
            <div className="InfoCard-Container">
                <div className="InfoCard-TextArea">
                    <h1 className="TextArea-Title">{infoArray[whichProject]['title']}</h1>
                    <p className="TextArea-Description">{infoArray[whichProject]['subTitle']}</p>
                    <p className="TextArea-Question">Что вас ждёт?</p>
                    <ul className="InfoCard-List">{generateList(whichProject)}</ul>
                    <ButtonLink
                        address={infoArray[whichProject]['address']}
                        title={"Подробнее о проекте"}>
                    </ButtonLink>
                    <NavigationArrows changeProject={changeProject} whichProject={whichProject}/>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;