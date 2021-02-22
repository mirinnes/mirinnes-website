import React, { useState } from 'react';
import './home.scss';
function Home() {
	const [circleCenter, setCircleCenter] = useState({ x: '50%', y: '50%' });
	const [lights, setLights] = useState(true);
	const getMousePosition = (e) => {
		return { x: e.clientX, y: e.clientY };
	};

	const handleOnMouseMove = (e) => {
		let mousePos = getMousePosition(e);
		let nX = mousePos.x + 'px';
		let nY = mousePos.y + 'px';
		setCircleCenter({ x: nX, y: nY });
	};
	const handleOnClickLights = () => {
		setLights(!lights);
	};

	const dynamicClipPath = (posX, posY) => {
		if (lights) {
			return { clipPath: `circle(10% at ${posX} ${posY}` };
		} else {
			return null;
		}
	};
	return (
		<section className='Home' onMouseMove={(e) => handleOnMouseMove(e)}>
			<div
				style={dynamicClipPath(circleCenter.x, circleCenter.y)}
				className='bg'
			/>
			<button onClick={() => handleOnClickLights()} className='btn-light'>
				Lights ON!
			</button>
		</section>
	);
}

export default Home;
