import React from 'react';
import MemberCard from "./MemberCard";
import './Team.scss';

const Team = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            return images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('../../../images/team', false, /\.(png|jpe?g|svg)$/));

    const members = [{
        name: 'Обертяева Карина', position: 'Руководитель организации', pic: images['karina.png']
    }, {
        name: 'Благушин Никита', position: 'Главный игровой методист', pic: images['nikita.png']
    }, {
        name: 'Болтнева Алиса', position: 'Главный методист обучения', pic: images['alice.png']
    }, {
        name: 'Хвалынский Фёдор', position: 'Методист обучения', pic: images['fedor.png']
    }, {
        name: 'Попова Ксения', position: 'Организатор, творец', pic: images['ksenia.png']
    }, {
        name: 'Переславцев Данила', position: 'Игровой методист', pic: images['danila.png']
    }, {
        name: 'Пищулина Алина', position: 'Организатор пространства', pic: images['alina.png']
    }, {
        name: 'Козлова Лиза', position: 'Руководитель Лиг', pic: images['danila.png']
    }]

    return (
        <div className="Team wrapper gaps" id="team">
            <p className="Team-Spoiler">кто творит для вас</p>
            <h2 className="Team-Title">наша команда</h2>
            <div className="Team-Grid">
            {members.map((member, index) => (<MemberCard key={index} member={member}/>))}
            </div>
        </div>
    );
};

export default Team;