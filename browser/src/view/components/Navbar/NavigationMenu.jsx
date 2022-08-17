import React from 'react';
import PropTypes from 'prop-types';
import './navigation-menu.scss';

export const NavigationMenu = ({ links }) => {
  return (
    <nav className='navbar'>
      <ul className='nav-user-actions'>
        {links.map(link => {
          return (
            <li className='nav-icon-container' key={link.name}>
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
      Icon: PropTypes.func.isRequired,
      isExternal: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
