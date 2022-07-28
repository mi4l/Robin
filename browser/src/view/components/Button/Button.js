import React from 'react';
import './Button.scss';

export const Button = ({ layout, label, Icon, type }) => {
  return (
    <button
      className={`${
        type === ButtonAttributes.Type.destructive
          ? 'btn-destructive'
          : type === ButtonAttributes.Type.primary
          ? 'btn-primary'
          : 'btn-secondary'
      }
      ${
        type === ButtonAttributes.Layout.iconAndLabel
          ? 'btn-icon-label'
          : type === ButtonAttributes.Layout.iconOnly
          ? 'btn-icon-only'
          : 'btn-label-only'
      }`}
    >
      {layout === ButtonAttributes.Layout.iconOnly ||
      layout === ButtonAttributes.Layout.iconAndLabel
        ? Icon
        : null}
      {layout === ButtonAttributes.Layout.labelOnly ||
      layout === ButtonAttributes.Layout.iconAndLabel
        ? label
        : null}
    </button>
  );
};

const ButtonAttributes = {
  Layout: {
    iconOnly: 'icon',
    labelOnly: 'label',
    iconAndLabel: 'icon-label',
  },
  Type: {
    primary: 'primary',
    secondary: 'secondary',
    destructive: 'destructive',
  },
};
Object.freeze(ButtonAttributes);

Button.defaultProps = {
  layout: ButtonAttributes.Layout.iconAndLabel,
  label: undefined,
  icon: undefined,
  type: ButtonAttributes.Type.primary,
};

/*
TODO - Jul 28:
- Is 'ButtonAttributes' the right name for this enum-style object? I think naming it 'ButtonProps' would be confused with actual component props, and 'ButtonEnum' is not descriptive enough
- How to configure/where to place this enum so that other files can access it (such as when passing in layout prop info down into <Button /> from NavigationMenu.js)
- Later: figure out the navmenu interaction. Should it always expand on hover, or do you have to click on an expand button?
*/
