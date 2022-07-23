import React from 'react';
import './Button.scss';

export const Button = ({ icon }) => {
  return (
    <button type='button' className=''>
      button
    </button>
  );
};

/*
Button:
- Style: icon only, text only, icon + text
- Interaction states: default, hover, selected (I don't think I'll worry about an :active/pressed button styling)

TODO:
- Populate the navLinks list in App.js with an array of these button components instead
- Translate the object in navLinks to instead have this component accept props:
    + what Icon (svg) to display (how to make this optional if style === text only?)
    + label (how to make this optional if style != text)
    + style (icon/text/icon+text), and type (e.g. normal, secondary, alert, etc.)
- Think of better names than 'style' and 'type'
- Rename scss class names for this component to be more generic
- Should the navLinks then live back in NavigationMenu? Or is that not good to have the object being rendered as well as the rendering logic in the same place?
- In NavigationMenu.js, iterate over the array of components appropriately
- Note to self: in the future, where will Route info live?
*/
