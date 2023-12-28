import React, {useState} from 'react';
import InfoCard from "./InfoCard";
import './Projects.scss';

const Projects = () => {
    const [whichProject, setWhichProject] = useState(0)
    function changeProject() {
        (whichProject === 0) ? (setWhichProject(1)) : (setWhichProject(0));
        return whichProject;
    }

    return (
        <div className="Projects">
            <p className="Projects-spoiler">
                где творятся чудеса <br/>
                <i className="arrow-down"></i>
            </p>
            <h1 className="Projects-title">проекты нашей команды</h1>
            <InfoCard changeProject={changeProject} whichProject={whichProject}/>
        </div>
    );
};

export default Projects;