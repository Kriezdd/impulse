import React, {useState} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import InfoCard from "./InfoCard";
import './Projects.scss';

const Projects = () => {
    const [whichProject, setWhichProject] = useState(0)
    function changeProject() {
        (whichProject === 0) ? (setWhichProject(1)) : (setWhichProject(0));
        return whichProject;
    }

    return (
        <div className="Projects wrapper gaps" id="projects">
            <ScrollLink
                activeClass="active"
                smooth spy to="projects"
                duration={100}
                offset={-100}
                className="Projects-Spoiler"
            >
                где творятся чудеса <br/>
                <i className="Arrow-Down"></i>
            </ScrollLink>
            <h1 className="Projects-Title">проекты нашей команды</h1>
            <InfoCard changeProject={changeProject} whichProject={whichProject}/>
        </div>
    );
};

export default Projects;