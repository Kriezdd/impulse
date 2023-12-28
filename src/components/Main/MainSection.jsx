import React from 'react';
import './MainSection.scss';
import ButtonMore from "../../utils/ButtonMore";

const MainSection = () => {
    const images = require.context('../../images/main', false);
    const imageList = images.keys().map(image => images(image));

    return (
        <div className="MainSection">
            <div className="Main-grid">
                <div className="Main-info">
                    <h1>
                        <span>Импульс</span> - это семья
                    </h1>
                    <p>Место, где мы играем, исследуем, обучаемся новому,
                        чтобы <strong>раскрывать потенциал</strong> и <strong>развиваться</strong>
                    </p>
                </div>
                <ButtonMore title={"Узнать больше о нас"} classname="moreInfo"/>
                <div className="Main-images">
                    {imageList.map((image, index) => (
                        <img key={index} src={image} alt={`pic-${index}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection;