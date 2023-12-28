import React from 'react';
import MainSection from "../components/Main/MainSection";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";

const MainPage = () => {
    return (
        <div>
            <MainSection/>
            <Projects/>
            <Team/>
        </div>
    );
};

export default MainPage;