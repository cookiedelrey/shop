import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = (props) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
    const links = [
        {
            id: 1,
            tittle: "Каталог",
            url: "/",
          },
          {
            id: 2,
            tittle: "Доставка",
            url: "/",
          },
          {
            id: 3,
            tittle: "Оплата",
            url: "/",
          },
          {
            id: 4,
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
        <div className='container'>
                <img className='logo' src={logo} alt=''/>
                <ul className='navbar-ul'>
                {links &&
          links.map((item, i) => (
            <li key='id'>
              <Link className='link' to={item.url}>{item.tittle}</Link>
            </li>
          ))}
                </ul>
            <div className='inp-div'>
                <input type='text' placeholder='Поиск по названию картины' onChange={handleSearch} />
                <button className='search-btn' onClick={() => props.onSearch(search)}>Найти</button>
            </div>
        </div>
    );
};

export default Navbar;