import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";
import phone from "../../images/util_icons/phone.png";
import vk_logo from  "../../images/util_icons/VK Circled.png";
import tg_logo from "../../images/util_icons/Telegram App.png";
import './Footer.scss';



const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-Container wrapper">
                <div className="Footer-Content">
                    <div className="Content Naming">
                        <Link to={"/"} className="Footer-LogoContainer">
                            <img src={logo} alt="logo" />
                            <h3>Импульс</h3>
                        </Link>
                        <strong>© Импульс 2024</strong>
                        <p>ИП Обертяева Карина Владимировна</p>
                    </div>
                    <div className="Content Contacts">
                        <h4>Контакты:</h4>
                        <div className="Contacts-Description">
                            <p>TG/WhatsApp:</p>
                            <p>(Обертяева Карина Владимировна)</p>
                        </div>
                        <div className="Contacts-Phone">
                            <img src={phone} alt="phone"/>
                            <p>+7 (961) 181-37-85</p>
                        </div>
                        <p><strong>E-mail:</strong> impulse-camp@mail.ru</p>
                    </div>
                    <div className="Content Socials">
                        <h4>Мы в социальных сетях:</h4>
                        {/* todo: проблемы безопасности с target _blank в старых браузерах */}
                        <div className="Socials-Links">
                            <a href="https://vk.com/impulse_msk" target="_blank"><img src={vk_logo} alt="vk"/></a>
                            <a href="https://t.me/impulse_msk" target="_blank"><img src={tg_logo} alt="tg"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;