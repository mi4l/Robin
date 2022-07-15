import React from 'react';
import PropTypes from 'prop-types';
import './NavigationMenu.scss';

export const NavigationMenu = ({ links }) => {
  return (
    <nav className='navbar'>
      <ul className='nav-section-one'>
        {links.map(link => {
          if (link.name !== 'Settings') {
            return (
              <li className='icon-container'>
                <img src={link.icon} className='nav-icon' alt={link.name} />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

NavigationMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      isExternal: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
