import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import logo from '../../images/logo.png';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    const {pathname} = location;

    return (
        <header className="Header">
            <nav className="wrapper">
                {
                    pathname === "/" ?
                        <>
                            <ScrollLink
                                activeClass="active"
                                smooth spy to="root"
                                duration={100}
                                offset={-200}
                                className="Header-LogoContainer logo">
                                <img src={logo} alt="logopic"/>
                                <h3>Импульс</h3>
                            </ScrollLink>
                            <ul>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        smooth spy to="projects"
                                        duration={100}
                                        offset={-100}
                                    >
                                        Проекты
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        smooth spy to="team"
                                        duration={100}
                                        offset={-100}
                                    >
                                        Команда
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        smooth spy to="galery"
                                        duration={100}
                                        offset={-100}
                                    >
                                        Галерея
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass="active"
                                        smooth spy to="contacts"
                                        duration={100}
                                        offset={-100}
                                    >
                                        Контакты
                                    </ScrollLink>
                                </li>
                            </ul>
                        </>
                        :
                        <>
                            <Link to={"/"} className="Header-LogoContainer logo">
                                <img src={logo} alt="logopic"/>
                                <h3>Импульс</h3>
                            </Link>
                            <ul>
                                <Link to={"/"}>Вернуться на главную</Link>
                            </ul>
                        </>
                }
                {}

            </nav>
        </header>
    )
        ;
};

export default Header;