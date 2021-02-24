import React, { useState } from 'react';
import Wonder from '../../components/wonder/Wonder';
import ArtPortrait from '../../components/objects/ArtPortrait';
import BookInfo from '../../components/objects/BookInfo';
import BookMaths from '../../components/objects/BookMaths';
import BookPhysics from '../../components/objects/BookPhysics';
import Chair from '../../components/objects/Chair';
import Computer from '../../components/objects/Computer';
import DesktopA from '../../components/objects/DesktopA';
import DesktopB from '../../components/objects/DesktopB';
import FirmaMirinnes from '../../components/objects/FirmaMirinnes';
import Frog from '../../components/objects/Frog';
import Jack from '../../components/objects/Jack';
import Lamp from '../../components/objects/Lamp';
import LampWheel from '../../components/objects/LampWheel';
import LeafA from '../../components/objects/LeafA';
import LeafB from '../../components/objects/LeafB';
import LeafC from '../../components/objects/LeafC';
import LightBox from '../../components/objects/LightBox';
import LittleChair from '../../components/objects/LittleChair';
import MouseKeyboard from '../../components/objects/MouseKeyboard';
import Pencil from '../../components/objects/Pencil';
import PlantBox from '../../components/objects/PlantBox';
import Sheet from '../../components/objects/Sheet';
import Tetera from '../../components/objects/Tetera';
import Wheel from '../../components/objects/Wheel';
import Window from '../../components/objects/Window';

import './home.scss';

function Home() {
	const [circleCenter, setCircleCenter] = useState({ x: '50%', y: '50%' });
	const [lightsOff, setLights] = useState(true);
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
		setLights(!lightsOff);
	};

	const dynamicCircleClipPath = (posX, posY) => {
		if (lightsOff) {
			return { clipPath: `circle(10% at ${posX} ${posY}` };
		} else {
			return null;
		}
	};

	const introText = lightsOff
		? 'We need to turn on some lightsOff here...'
		: 'Welcome to my headspace!';
	return (
		<section className='Home' onMouseMove={(e) => handleOnMouseMove(e)}>
			{!lightsOff && <LeafA />}
			{!lightsOff && <LampWheel />}

			<div
				style={dynamicCircleClipPath(circleCenter.x, circleCenter.y)}
				className='bg'
			>
				<div className='wall'></div>
				<div className='floor'></div>
				<Wonder />
				<Window />
				<DesktopA />
				<ArtPortrait />
				<Computer />
				<BookInfo />
				<BookMaths />
				<BookPhysics />
				<Chair />
				<DesktopB />
				<Frog />
				<Tetera />
				<Jack />
				<LampWheel />
				<LightBox />
				<LittleChair />
				<MouseKeyboard />
				<Sheet />
				<Wheel />
				<LeafC />
				<LeafB />
				<LeafA />
				<PlantBox />
				<Pencil />
				<FirmaMirinnes />
				{!lightsOff && <div className='light'></div>}

				<Lamp />
				<div className='text'>
					<h2>Hola soy Miri!</h2>
					<p>{introText}</p>
				</div>
				<button
					onClick={() => handleOnClickLights()}
					className={`btn-light ${lightsOff ? 'off' : ''}`}
				></button>
			</div>
		</section>
	);
}

export default Home;
