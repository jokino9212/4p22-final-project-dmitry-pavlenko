import React from "react";
import { ShopIcon, SearchIcon, LogoIcon } from 'assets/icons/';
import './MainLayout.sass';
import { useNavigate } from 'react-router-dom';
import { Social } from './components';



const MainLayout = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            {/* HEADER */}
            <header className='header'>
                <div className='header__outter outter'>
                    <div className="header__top">
                        <div className="header__top-welcome">
                            <span className="header__top-welcome-text">Добро пожаловать в наш онлайн-магазин</span>
                        </div>
                        <div className="header__signup">
                        <div className="header__social"><Social /></div>
                            <a className="header__signup-link"
                                onClick={() => {
                                    navigate('/registration')
                                }
                                }
                            >
                                Вход
                            </a>
                        </div>
                    </div>
                    <div className="header__inner inner">
                        <div className="header__bottom">
                            <div className="header__logo">
                                <LogoIcon className="header__logo-icon logo" />
                            </div>
                            <form className="header__search-box">
                                <input className="header__search-txt" type="text" name="" placeholder="Поиск.." />
                                <a className="header__search-btn" href="">
                                    <SearchIcon />
                                </a>
                            </form>
                            <div className="header__cart" onClick={() => navigate('/cart')}>
                                <ShopIcon className="header__cart-icon" />
                            </div>
                        </div>
                        <div className="header__navbar">
                            <a className="header__navbar-item" onClick={() => navigate('/')}
                            >
                                Главная
                            </a>
                            <a className="header__navbar-item"
                                onClick={() => {
                                    navigate('/support')
                                }}
                            >
                                Поддержка
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* CONTENT */}
            <div className='content' >{props.children}</div>
            {/* FOOTER */}
            <footer className='footer'>
                <div className='footer__outter outter'>
                    <div className='footer__inner inner'>
                        <div className='footer__top'>
                            <div className='footer__top-col-1'>
                                <div className="footer__logo">
                                    <LogoIcon className="footer__logo-icon logo" />
                                </div>
                                <span className='footer__description'>
                                    Первый мебельный онлайн-магазин. Крупный выбор мебели в вашем городе.
                                </span>
                                <Social/>
                            </div>
                            <div className='footer__top-col-2'>
                                <ul className='footer__col-2-nav-list'>
                                    <li className='footer__nav-item footer__nav-item--title'>
                                        <a className='footer__nav-link'>Помощь</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Политика приватности</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Оплата и доставка</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Налоговая политика</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Отследить заказ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__top-col-3'>
                                <ul className='footer__col-3-nav-list'>
                                    <li className='footer__nav-item footer__nav-item--title'>
                                        <a className='footer__nav-link'>Магазин</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Мебель</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Столы</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Диваны</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Другие</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__top-col-4'>
                                <ul className='footer__col-4-nav-list'>
                                    <li className='footer__nav-item footer__nav-item--title'>
                                        <a className='footer__nav-link'>Поддержка</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Адрес</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Напишите нам</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Загрузить приложение</a>
                                    </li>
                                    <li className='footer__nav-item'>
                                        <a className='footer__nav-link'>Условия</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='footer__bottom'>
                        <div className='footer__copyrights'>
                            © 2021 Funking - All rights reserved.
                        </div>
                        <div className='footer__terms'>
                            <ul className='footer__terms-list'>
                                <li className='footer__terms-item'>
                                    <a className='footer__terms-link'>
                                        Политика
                                    </a>
                                </li>
                                <li className='footer__terms-item'>
                                    <a className='footer__terms-link'>
                                        Безопасность
                                    </a>
                                </li>
                                <li className='footer__terms-item'>
                                    <a className='footer__terms-link'>
                                        Условия
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainLayout