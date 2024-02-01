import React from 'react';
import MainSection from "../components/MainPage/Main/MainSection";
import Projects from "../components/MainPage/Projects/Projects";
import Team from "../components/MainPage/Team/Team";

const MainPage = () => {

    return (
        <div>
            <MainSection />
            <Projects />
            <Team />
        </div>
    );
};

export default MainPage;