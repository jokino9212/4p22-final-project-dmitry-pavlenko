import React from 'react';
import './Social.sass';

import {OdIcon, VkIcon, PinterestIcon } from 'assets/icons/'

 const  Social = function() {
  return (
    <div className='social'>
      <ul className='social__list'>
        <li className='social__item social__item--vk '>
          <a href='#' className='social__link'>
            <VkIcon className='social__icon social__icon--vk' />
          </a>
        </li>
        <li className='social__item social__item--od'>
          <a href='#' className='social__link'>
            <OdIcon className='social__icon social__icon--od' />
          </a>
        </li>
        <li className='social__item social__item--pinterest'>
          <a href='#' className='social__link'>
            <PinterestIcon className='social__icon social__icon--pinterest' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social