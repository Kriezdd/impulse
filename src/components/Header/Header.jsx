import React from 'react';
import logo from '../../images/logo.png';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to={"/"} className="logoWithText">
                    <img src={logo} alt="logo" />
                    <p>Импульс</p>
                </Link>
                <ul>
                    <li>
                        <Link to={"/impulse"}>Проекты</Link>
                    </li>
                    <li>
                        <Link to={"#Team"}>Команда</Link>
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