import React from 'react';
import './Button.scss';

export const Button = ({ layout, label, Icon, type }) => {
  const getButtonClassnameByType = type =>
    ({
      [Button.TYPE.PRIMARY]: 'primary',
      [Button.TYPE.SECONDARY]: 'secondary',
      [Button.TYPE.DESTRUCTIVE]: 'destructive',
    }[type] || Button.TYPE.PRIMARY);

  return (
    <a
      aria-label={`Navigate to the ${label} page`}
      className={`button ${getButtonClassnameByType(type)}`}
    >
      {Icon}
      {label}
    </a>
  );
};

Button.TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DESTRUCTIVE: 'destructive',
};

Button.defaultProps = {
  label: null,
  icon: null,
  type: Button.TYPE.PRIMARY,
};
