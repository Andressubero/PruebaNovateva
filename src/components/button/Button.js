import React from 'react';
import './Button.css';

export const Button = (props) => {
    const { text, variant } = props;
  return (
    <button className={variant}>{text}</button>
  )
}
