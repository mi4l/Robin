import React from 'react';
import { FiHome, FiLayers, FiSettings, FiLogOut, FiCircle } from 'react-icons/fi';
import './NavigationMenu.css';

export const NavigationMenu = () => {
  return (
    <>
      <div className='navbar'>
        <div className='nav-top'>
          <div className='icon-container'>
            <FiCircle className='nav-icon logo' />
          </div>

          <div className='icon-container'>
            <FiHome className='nav-icon' />
          </div>

          <div className='icon-container'>
            <FiLayers className='nav-icon' />
          </div>
        </div>
        <div className='nav-bottom'>
          <div className='icon-container'>
            <FiSettings className='nav-icon' />
          </div>
          <div className='avatar'></div>
        </div>
      </div>
    </>
  );
};
