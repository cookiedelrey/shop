import React from 'react';
import logo from '../../assets/logo.svg'
import addressIcon from '../../assets/addressIcon.svg'
import phoneIcon from '../../assets/phoneIcon.svg'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const links = [
        {
            id: 11,
            tittle: "Каталог",
            url: "/",
          },
          {
            id: 22,
            tittle: "Доставка",
            url: "/",
          },
          {
            id: 33,
            tittle: "Оплата",
            url: "/",
          },
          {
            id: 44,
            tittle: "Контакты",
            url: "/",
          },
          {
            id: 5,
            tittle: "О галерее",
            url: "/",
          },
    ]
    return (
        <div className='footer'>
                <img className='footer-logo' src={logo} alt=''/>
                <ul className='footer-ul'>
                {links &&
          links.map((item) => (
            <li>
              <Link className='footer-link' to={item.url}>{item.tittle}</Link>
            </li>
          ))}
                </ul>
            <div className='contacts'>
                <div>
                <img src={phoneIcon} alt=''/>
                <span>+7 (495) 555-55-55</span>
                </div>
                <div>
                <img src={addressIcon} alt=''/>
                <span>г. Москва, ул. Расплетина, 24</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;