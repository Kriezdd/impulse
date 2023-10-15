import React from 'react';
import logo from '../images/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href="/projects">Проекты</a>
                    </li>
                    <li>
                        <a href="/team">Команда</a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="logoWithText">
                                <img src={logo}/>
                                <p>Импульс</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/gallery">Галерея</a>
                    </li>
                    <li>
                        <a href="/contacts">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;