import React from 'react';
import PropTypes from 'prop-types';
import './NavigationMenu.scss';

export const NavigationMenu = ({ links }) => {
  return (
    <nav className='navbar'>
      <ul className='nav-user-actions'>
        {links.map(link => {
          return (
            <li className='nav-icon-container'>
              <link.Icon />
            </li>
          );
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
