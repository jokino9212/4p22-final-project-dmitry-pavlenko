import React from "react";
import { ShopIcon, SearchIcon, LogoIcon, OdIcon, VkIcon, PinterestIcon } from 'assets/icons/'
import './MainLayout.sass'
import { useNavigate } from 'react-router-dom';



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
                            <a className="header__signup-link"
                                onClick={() => {
                                    navigate('/registration')
                                }
                                }
                            >
                                Регистрация или Вход
                            </a>
                        </div>
                    </div>
                    <div className="header__inner inner">
                        <div className="header__bottom">
                            <div className="header__logo">
                                <LogoIcon className="header__logo-icon logo" />
                            </div>
                            <form className="header__search-box">
                                <input className="header__search-txt" type="text" name="" placeholder="type to search" />
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
                                <div className='footer__social social'>
                                    <ul className='footer__social-list'>
                                        <li className='footer__social-item footer__social-item--vk'>
                                            <a href="#" className="footer__social-link">
                                                <VkIcon className='footer__social-icon footer__social-icon--vk' />
                                            </a>
                                        </li>
                                        <li className='footer__social-item footer__social-item--od'>
                                            <a href="#" className="footer__social-link">
                                                <OdIcon className='footer__social-icon footer__social-icon--od' />
                                            </a>
                                        </li>
                                        <li className='footer__social-item footer__social-item--pinterest'>
                                            <a href="#" className="footer__social-link">
                                                <PinterestIcon className='footer__social-icon footer__social-icon--pinterest' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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