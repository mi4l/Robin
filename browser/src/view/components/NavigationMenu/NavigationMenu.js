import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './NavigationMenu.scss';

export const NavigationMenu = ({ links }) => {
  return (
    <nav className='navbar'>
      <ul className='nav-user-actions'>
        {links.map(link => {
          return (
            <Button
              className=''
              label={link.label}
              style='icon-label'
              icon={<link.Icon />}
            />
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
