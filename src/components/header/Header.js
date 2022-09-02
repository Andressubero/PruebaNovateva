import React from 'react';
import { Button } from '../button/Button';
import './Header.css';

export const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='headerTitleContainer'>Nueva tabla</div>
        <div className='headerButtonContainer'><Button text="GUARDAR" variant="contained" /></div>
    </div>
  )
}
