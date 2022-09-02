import React from 'react';
import './LabelContainer.css';

export const LabelContainer = (props) => {
    const { placeholder, labelText, width, height, textArea } = props;
    if (textArea){
        return(
            <div>
                <div className='labelTextContainer'>{labelText}</div>
                <textarea style={{ width, height }} className='formInput formTextarea' placeholder={placeholder} />
            </div>
          )
    }
  return (
    <div>
        <div className='labelTextContainer'>{labelText}</div>
        <input style={{ width, height }} className='formInput' placeholder={placeholder} />
    </div>
  )
}
