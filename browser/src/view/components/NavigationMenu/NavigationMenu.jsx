import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './NavigationMenu.scss';

export const NavigationMenu = ({ links }) => {
  return (
    <nav className='navbar open'>
      <ul className='nav-user-actions'>
        {links.map(link => {
          return (
            <li key={link.label}>
              <Button className='' label={link.label} Icon={<link.Icon />} type='primary' />
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
      label: PropTypes.string,
      path: PropTypes.string.isRequired,
      Icon: PropTypes.func.isRequired,
      isExternal: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
