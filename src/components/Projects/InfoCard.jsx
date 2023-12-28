import React from 'react';
import './InfoCard.scss';
import NavigationArrows from "../../utils/NavigationArrows";
import pic1 from "../../images/IMG_8493.png";
import pic2 from "../../images/IMG_8588.PNG";
import ysmile from "../../images/projects/ysmile.svg";
import gsmile from "../../images/projects/gsmile.svg";
import ButtonMore from "../../utils/ButtonMore";

const InfoCard = ({whichProject, changeProject}) => {

    const infoArray = [
        {
            title: 'Импульс',
            subTitle: 'Пятидневный проект дневного пребывания для детей школьного возраста',
            list: ['активный отдых', 'развлечение', 'обучение'],
            picture: pic1
        },
        {
            title: 'Лиги',
            subTitle: 'Еженедельные занятия, направленные на развитие личностных навыков SOFT-skills',
            list: ['комфортное пространство', 'единое сообщество', 'индивидуальный подход'],
            picture: pic2
        }
    ]

    function generateList(whichProject) {
        const listItems = infoArray[whichProject]['list'].map((d) => <li key={d}>{d}</li>)
        return listItems;
    }


    return (
        <div className="InfoCard">
            <img className="gsmile" src={gsmile} alt="gsmile"/>
            <img className="ysmile" src={ysmile} alt="ysmile"/>
            <img className="member-picture" src={infoArray[whichProject]['picture']} alt='pic'/>
            <div className="InfoCard-shape">
                <div className="InfoCard-text">
                    <h1 className="InfoCard-title">{infoArray[whichProject]['title']}</h1>
                    <p className="InfoCard-p">{infoArray[whichProject]['subTitle']}</p>
                    <p className="InfoCard-question">Что вас ждёт?</p>
                    <ul className="InfoCard-list">{generateList(whichProject)}</ul>
                    <ButtonMore title={"Подробнее о проекте"}></ButtonMore>
                    <NavigationArrows changeProject={changeProject} whichProject={whichProject}/>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;