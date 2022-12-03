import React from 'react';
import { ShopIcon, LogoIcon } from 'assets/icons/';
import './MainLayout.sass';
import { useNavigate } from 'react-router-dom';
import { Social } from './components';



const MainLayout = (props) => {
  const navigate = useNavigate();
  return (
    
    <div>
      {/* HEADER */}
      <header className='header'>
        <div className='header__outter outter'>
          <div className='header__top'>
            <div className='header__top-welcome'>
              <span className='header__top-welcome-text'>
                Добро пожаловать в наш онлайн-магазин
              </span>
            </div>
            <div className='header__phone-box'>
              <a className='header__phone' href='tel:+78001111111' target="_blank" rel="noreferrer">
                8 (800) 123-45-67
              </a>
            </div>
            <div className='header__signup'>
              <div className='header__social'>
                <Social />
              </div>
              <button
                className='header__signup-link'
                onClick={() => {
                  navigate('/registration');
                }}
                // href='#'
              >
                Вход
              </button>
            </div>
          </div>
          <div className='header__inner inner'>
            {/* HEADER BOTTOM */}
            <div className='header__bottom'>
              <div className='header__logo'>
                <a href='/4p22-final-project-dmitry-pavlenko/' className='header__logo-link'>
                  <LogoIcon />
                </a>
              </div>

              <div className='header__navbar'>
                <button className='header__navbar-item' onClick={() => navigate('/')} href='#'>
                  Главная
                </button>
                <button
                  className='header__navbar-item'
                  onClick={() => {
                    navigate('/support');
                  }}
                  href='#'
                >
                  Поддержка
                </button>
              </div>
              <div className='header__cart' onClick={() => navigate('/cart')} tabIndex='0'>
                <ShopIcon className='header__cart-icon' />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* CONTENT */}
      <div className='content'>{props.children}</div>
      {/* FOOTER */}
      <footer className='footer'>
        <div className='footer__outter outter'>
          <div className='footer__inner inner'>
            <div className='footer__top'>
              <div className='footer__top-col-1'>
                <div className='footer__logo'>
                  <a href='/4p22-final-project-dmitry-pavlenko/' className='header__logo-link'>
                    <LogoIcon />
                  </a>
                </div>
                <span className='footer__description'>
                  Первый мебельный онлайн-магазин. Крупный выбор мебели в вашем городе.
                </span>
                <Social />
              </div>
              <div className='footer__top-col-2'>
                <ul className='footer__col-2-nav-list'>
                  <li className='footer__nav-item footer__nav-item--title'>
                    <button className='footer__nav-link' tabIndex='0'>Помощь</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Политика приватности</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Оплата и доставка</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Налоговая политика</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Отследить заказ</button>
                  </li>
                </ul>
              </div>
              <div className='footer__top-col-3'>
                <ul className='footer__col-3-nav-list'>
                  <li className='footer__nav-item footer__nav-item--title'>
                    <button className='footer__nav-link' tabIndex='0'>Магазин</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Мебель</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Столы</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Диваны</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Другие</button>
                  </li>
                </ul>
              </div>
              <div className='footer__top-col-4'>
                <ul className='footer__col-4-nav-list'>
                  <li className='footer__nav-item footer__nav-item--title'>
                    <button className='footer__nav-link' tabIndex='0'>Поддержка</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Адрес</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Напишите нам</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Загрузить приложение</button>
                  </li>
                  <li className='footer__nav-item'>
                    <button className='footer__nav-link' tabIndex='0'>Условия</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__bottom'>
            <div className='footer__copyrights'>© 2021 Funking - All rights reserved.</div>
            <div className='footer__terms'>
              <ul className='footer__terms-list'>
                <li className='footer__terms-item'>
                  <button className='footer__terms-link' tabIndex='0'>Политика</button>
                </li>
                <li className='footer__terms-item'>
                  <button className='footer__terms-link' tabIndex='0'>Безопасность</button>
                </li>
                <li className='footer__terms-item'>
                  <button className='footer__terms-link' tabIndex='0'>Условия</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
