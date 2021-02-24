import React from 'react';
import UNI_GIF from '../../assets/XZ5V.gif';
import './wonder.scss';
function Wonder({ opacity = 1 }) {
	return (
		<div className='wonder' style={{ opacity: `${opacity}` }}>
			<img src={UNI_GIF} alt='uni' />
		</div>
	);
}

export default Wonder;
