import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import InfoCard from "./InfoCard";
import './Projects.scss';
import pic1 from "../../../images/projects/impulse.jpg";
import pic2 from "../../../images/projects/league.jpg";

const Projects = () => {
    const projectsArray = [
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

    return (
        <div className="Projects wrapper gaps" id="projects">
            <ScrollLink
                activeClass="active"
                smooth spy to="projects"
                duration={100}
                offset={-100}
                className="Projects-Spoiler"
            >
                <p className="Spoiler-P">где творятся чудеса</p>
                <i className="Arrow-Down"></i>
            </ScrollLink>
            <h3 className="Projects-Title">наши проекты</h3>
            <div className="Projects-Grid">
                {projectsArray.map((project, id) => (
                    <InfoCard project={project} key={id}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;