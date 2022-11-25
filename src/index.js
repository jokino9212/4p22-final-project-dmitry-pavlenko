import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Main, Product, Cart, Support } from './modules/main/pages'
import { Login, Registration } from './modules/account/pages';
import { ErrorBoundary, Page404 } from './shared';

import './index.css';
import 'assets/styles/reset.sass'
import 'assets/styles/normalize.sass'
import 'assets/styles/global.sass'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter basename='4p22-final-project-dmitry-pavlenko'>
        <ErrorBoundary>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/products/:productId'} element={<Product />} />
                <Route path={'/support'} element={<Support />} />
                <Route path={'/cart'} element={<Cart />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/registration'} element={<Registration />} />
                <Route path={'*'} element={<Page404 />} />
            </Routes>
        </ErrorBoundary>
    </BrowserRouter>

);