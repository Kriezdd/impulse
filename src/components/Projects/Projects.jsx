import React, {useState} from 'react';
import InfoCard from "./InfoCard";

const Projects = () => {
    const [whichProject, setWhichProject] = useState(0)
    function changeProject() {
        console.log('fuck');
        (whichProject === 0) ? (setWhichProject(1)) : (setWhichProject(0));
        return whichProject;
    }

    return (
        <div className="Projects">
            <InfoCard changeProject={changeProject} whichProject={whichProject}/>
        </div>
    );
};

export default Projects;