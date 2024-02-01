import React from 'react';
import ButtonLink from "../../../utils/Buttons/ButtonLink/ButtonLink";
import nextProjectPic from '../../../images/impulse/next_project.png';
import './NextProject.scss';

const NextProject = () => {

    const nextProject = {
        title: 'Кунг-Фу Панда',
        description: 'Спасение Долины Мира и всех ее обитателей от непобедимого и безжалостного мастера Тай ' +
            'Лунга должно лечь на плечи Воина Дракона, Избранного среди лучших из лучших, коим становится…',
        date: '22-26 ноября',
        location: 'ABC "Montessori"',
        age: 'с 6-ти лет',
        price: '10 000р'
    }

    function importAll(r) {
        let icons = {};
        r.keys().map((item, index) => {
            return icons[item.replace('./', '')] = r(item);
        });
        return icons;
    }
    const icons = importAll(require.context('../../../images/impulse/icons', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="NextProject wrapper gaps">
            <img src={nextProjectPic} alt="nextproject.png" className="NextProject-Img"/>
            <div className="NextProject-Info">
                <h1>{nextProject.title}</h1>
                <div className="Info-PreDescription OrgInfo">
                    <img src={icons['map.png']} alt='map.png' className="Info-Icon"/>
                    <strong>описание игрового мира</strong>
                </div>
                <p className="Info-Description">{nextProject.description}</p>
                <div className="Info-OrgInfo">
                    <div className="OrgInfo">
                        <img src={icons['calendar.png']} alt='calendar.png' className="Info-Icon" />
                        <p>{nextProject.date}</p>
                    </div>
                    <div className="OrgInfo">
                        <img src={icons['marker.png']} alt='marker.png' className="Info-Icon" />
                        <p>{nextProject.location}</p>
                    </div>
                    <div className="OrgInfo">
                        <img src={icons['person.png']} alt='person.png' className="Info-Icon" />
                        <p>{nextProject.age}</p>
                    </div>
                </div>
                <div className="NextProject-Price">
                    <p>Стоимость: <strong>{nextProject.price}</strong></p>
                </div>
                <ButtonLink title={"Успей оставить заявку"}/>
            </div>
        </div>
    );
};

export default NextProject;