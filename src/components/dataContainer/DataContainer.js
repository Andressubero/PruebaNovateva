import React from 'react';
import { LabelContainer } from '../labelContainer/LabelContainer';
import './DataContainer.css';

export const DataContainer = () => {
  return (
    <div className='dataContainer'>
        <LabelContainer width="394px" height="41px" labelText="Nombre" placeholder="person" />
        <LabelContainer textArea labelText="Descripcion" width="827px" height="70px" placeholder="Tabla usada para x y z" />
    </div> 
  )
}
