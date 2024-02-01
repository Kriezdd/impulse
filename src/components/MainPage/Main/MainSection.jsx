import React from 'react';
import ButtonScroll from "../../../utils/Buttons/ButtonScroll/ButtonScroll";
import './MainSection.scss';

const MainSection = () => {
    const images = require.context('../../../images/main', false);
    const imageList = images.keys().map(image => images(image));

    return (
        <div className="MainSection wrapper gaps" id="main">
            <div className="MainSection-Grid">
                <div className="MainSection-Info">
                    <h1>
                        <span>Импульс</span> - это семья
                    </h1>
                    <p>
                        Место, где мы играем, исследуем, обучаемся новому,
                        чтобы <strong>раскрывать потенциал</strong> и <strong>развиваться</strong>
                    </p>
                </div>
                <ButtonScroll scrollTo={"team"} title={"Узнать больше о нас"} />
                <div className="MainSection-Images">
                    {imageList.map((image, index) => (
                        <img key={index} src={image} alt={`pic-${index}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection;