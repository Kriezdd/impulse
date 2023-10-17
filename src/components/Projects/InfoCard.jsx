import React from 'react';
import './InfoCard.scss';
import NavigationArrows from "../../utils/NavigationArrows";
import projects from "./Projects";

const InfoCard = ({whichProject, changeProject}) => {

    const infoArray = [
        {
            title: 'Импульс',
            subTitle: 'Пятидневный проект дневного пребывания для детей школьного возраста',
            list: ['активный отдых', 'развлечение', 'обучение']
        },
        {
            title: 'Лиги',
            subTitle: 'Еженедельные занятия, направленные на развитие личностных навыков SOFT-skills',
            list: ['комфортное пространство', 'единое сообщество', 'индивидуальный подход']
        }
    ]

    function generateList(whichProject) {
        const listItems = infoArray[whichProject]['list'].map((d) => <li key={d}>{d}</li>)
        return listItems;
    }


    return (
        <div className="InfoCard">
            <div className="pictureShape">
                <svg xmlns="http://www.w3.org/2000/svg" width="853" height="753" viewBox="0 0 853 753" fill="none">
                    <path d="M849.576 365.096C866.474 474.256 778.461 558.605 649.074 587.766C537.395 612.936 499.097 736.897 377.31 747.685C290.482 755.377 194.989 755.539 159.305 697.949C136.342 660.891 186.162 568.938 159.012 522.723C107.644 435.284 1.58017 348.654 1.42999 258.737C1.25943 156.619 73.4359 165.25 109.426 124.83C148.492 75.622 205.104 -4.71801 324.177 1.63662C373.472 1.63662 428.143 42.784 488.081 56.7294C545.899 70.1817 608.873 55.9699 663.053 81.2151C788.418 139.629 762.489 195.481 749.332 258.737C744.978 316.308 837.453 286.788 849.576 365.096Z" fill="#724CF9"/>
                    <path d="M828.828 369.131C844.731 471.013 761.894 549.74 640.117 576.956C535.007 600.449 498.961 716.145 384.337 726.214C302.617 733.393 212.741 733.544 179.156 679.793C157.545 645.206 204.435 559.383 178.883 516.249C130.538 434.639 30.7143 353.785 30.5742 269.862C30.415 174.552 98.3456 182.608 132.219 144.883C168.988 98.955 222.271 23.971 334.34 29.902C380.735 29.902 432.189 68.3062 488.602 81.322C543.018 93.8774 602.288 80.6131 653.28 104.175C771.271 158.695 746.866 210.824 734.482 269.862C730.383 323.595 817.419 296.043 828.828 369.131Z" fill="white"/>
                    <path d="M849.576 365.096C866.474 474.256 778.461 558.605 649.074 587.766C537.395 612.936 499.097 736.897 377.31 747.685C290.482 755.377 194.989 755.539 159.305 697.949C136.342 660.891 186.162 568.938 159.012 522.723C107.644 435.284 1.58017 348.654 1.42999 258.737C1.25943 156.619 73.4359 165.25 109.426 124.83C148.492 75.622 205.104 -4.71801 324.177 1.63662C373.472 1.63662 428.143 42.784 488.081 56.7294C545.899 70.1817 608.873 55.9699 663.053 81.2151C788.418 139.629 762.489 195.481 749.332 258.737C744.978 316.308 837.453 286.788 849.576 365.096Z" stroke="black" stroke-width="2"/>
                    <path d="M828.828 369.131C844.731 471.013 761.894 549.74 640.117 576.956C535.007 600.449 498.961 716.145 384.337 726.214C302.617 733.393 212.741 733.544 179.156 679.793C157.545 645.206 204.435 559.383 178.883 516.249C130.538 434.639 30.7143 353.785 30.5742 269.862C30.415 174.552 98.3456 182.608 132.219 144.883C168.988 98.955 222.271 23.971 334.34 29.902C380.735 29.902 432.189 68.3062 488.602 81.322C543.018 93.8774 602.288 80.6131 653.28 104.175C771.271 158.695 746.866 210.824 734.482 269.862C730.383 323.595 817.419 296.043 828.828 369.131Z" stroke="black" stroke-width="2"/>
                </svg>
            </div>
            <div className="textBoxShape">
                <div className="textBox">
                    <h1>{infoArray[whichProject]['title']}</h1>
                    <p>{infoArray[whichProject]['subTitle']}</p>
                    <p className="question">Что вас ждёт?</p>
                    <ul className="infoList">{generateList(whichProject)}</ul>
                    <button className="moreInfo">Подробнее о проекте</button>
                    <NavigationArrows changeProject={changeProject} whichProject={whichProject}/>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;