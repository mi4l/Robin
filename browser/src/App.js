import React from 'react';
import { NavigationMenu } from './view/components/Navbar/NavigationMenu';
import FiHome from './assets/icons/FiHome.svg';
import FiSettings from './assets/icons/FiSettings.svg';
import FiLayers from './assets/icons/FiLayers.svg';
import FiLogOut from './assets/icons/FiLogOut.svg';
import FiCircle from './assets/icons/FiCircle.svg';

const navLinks = [
  {
    name: 'Logo',
    path: '/',
    icon: FiCircle,
    isExternal: false,
  },
  {
    name: 'Home',
    path: '/',
    icon: FiHome,
    isExternal: false,
  },
  {
    name: 'Content',
    path: '/',
    icon: FiLayers,
    isExternal: false,
  },
  {
    name: 'Settings',
    path: '/',
    icon: FiSettings,
    isExternal: false,
  },
];

export const App = () => {
  return <NavigationMenu links={navLinks} />;
};
