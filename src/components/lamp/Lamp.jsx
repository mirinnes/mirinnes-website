import React from 'react';
import './lamp.scss';
function Lamp({ onClickSwitch }) {
  return (
    <>
      <svg
        width='25'
        height='450'
        viewBox='0 0 20 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='line1'
      >
        <line
          x1='50%'
          y1='0'
          x2='50%'
          y2='76%'
          stroke='white'
          stroke-width='10'
        />
      </svg>
      <svg
        width='25'
        height='450'
        viewBox='0 0 20 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='line2'
      >
        <line
          x1='50%'
          y1='80%'
          x2='50%'
          y2='100%'
          stroke='white'
          stroke-width='10'
        />
      </svg>
      <span className='switch'></span>
      <span onClick={() => onClickSwitch()} className='lamp'></span>
    </>
  );
}

export default Lamp;
