import React from 'react';
import './Main.scss';

const Main = () => {
    return (
        <div className="Main">
            <div className="heartShape">
                <div className="content">
                    <h1>Рост и развитие начинается с Импульса!</h1>
                    <button className="moreInfoAbout">Узнать больше</button>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="787" height="536" viewBox="0 0 787 536" fill="none">
                    <path d="M787 159.944C787 241.485 742.165 376.329 655.734 445.842C573.353 512.098 404.192 536 297.735 536C184.644 536 133.945 465.989 73.9864 386.563C18.2874 312.78 0 202.678 0 125.98C0 17.184 81.9703 -13.322 203.462 4.9579C259.817 13.437 324.674 65.4653 393.798 65.4653C481.883 65.4653 543.849 34.8561 609.194 32.7462C705.68 29.6309 787 64.9907 787 159.944Z" fill="white" fill-opacity="0.8"/>
                </svg>
            </div>
        </div>
    );
};

export default Main;