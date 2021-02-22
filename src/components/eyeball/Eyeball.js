import React, { useState, useContext } from 'react';
import mirinnesContext from '../../context/mirinnesContext';
import UNI_GIF from '../../assets/XZ5V.gif';
import './eye.scss';
import '../../pages/home/home.scss';

function Eyeball() {
	// State
	const [irisOp, setIrisOp] = useState(1);
	const [irisPos, setIrisPos] = useState({ x: '0px', y: '0px' });
	const [op, setOp] = useState(0);
	const [isEyeAnim, setisEyeAnim] = useState(false);
	const [displayEyeDesign, setDisplayEyeDesign] = useState(true);

	// Context
	const { toggleDisplayIntro } = useContext(mirinnesContext);

	// Gets
	const getMousePosition = (e) => {
		return { x: e.clientX, y: e.clientY };
	};
	const getEyeCenter = () => {
		const eye = document.getElementById('eye-container');

		return {
			x: eye.offsetLeft + eye.offsetWidth / 2,
			y: eye.offsetTop + eye.offsetHeight / 2,
		};
	};
	const getEyeDimensions = () => {
		const eye = document.getElementById('eye');

		return {
			w: eye.offsetWidth,
			h: eye.offsetHeight,
		};
	};
	const getIrisDimensions = () => {
		const iris = document.getElementById('iris');

		return {
			w: iris.offsetWidth,
			h: iris.offsetHeight,
		};
	};
	const getAspectRatio = () => {
		if (window.innerWidth) {
			return { w: window.innerWidth, h: window.innerHeight };
		} else if (document.body && document.body.offsetWidth) {
			return { w: document.body.offsetWidth, h: document.body.offsetHeight };
		} else {
			return 0;
		}
	};
	const getViewPortDiagonal = (ar, eyeCen) => {
		return ((ar.w - eyeCen.x) ** 2 + (ar.h - eyeCen.y) ** 2) ** 0.5;
	};
	const getRadiusDistance = (e) => {
		const eyePos = getEyeCenter();
		const mousePos = getMousePosition(e);
		let r =
			((eyePos.x - mousePos.x) * (eyePos.x - mousePos.x) +
				(eyePos.y - mousePos.y) * (eyePos.y - mousePos.y)) **
			0.5;
		return r;
	};

	// Handlers
	const handleOnMouseMove = (e) => {
		let ar = getAspectRatio();
		let eyeDim = getEyeDimensions();
		let eyeCen = getEyeCenter();
		let irisDim = getIrisDimensions();
		let mousePos = getMousePosition(e);
		let r = getRadiusDistance(e);
		let vpD = getViewPortDiagonal(ar, eyeCen);
		let rx = (eyeDim.w - irisDim.w) / ar.w;
		let ry = (eyeDim.h - irisDim.h) / ar.h;
		let x = rx * mousePos.x;
		let y = ry * mousePos.y;
		let newOp = 1 - (10 * r) / vpD;
		let posX = x + 'px';
		let posY = y + 'px';
		setOp(newOp);
		setIrisPos({ x: posX, y: posY });
	};
	const handleOnClick = (e) => {
		setisEyeAnim(!isEyeAnim);
		setDisplayEyeDesign(!displayEyeDesign);
		setTimeout(() => {
			toggleDisplayIntro();
		}, 500);
	};
	const handleOnMouseEnterEye = (e) => {
		let eyeCen = getEyeCenter();
		let eyeDim = getEyeDimensions();
		let mousePos = getMousePosition(e);
		let DIAG_EYE_DIV =
			((eyeDim.w - eyeCen.x) ** 2 + (eyeDim.h - eyeCen.y) ** 2) ** 0.5;
		let r =
			((mousePos.x - eyeDim.w) ** 2 + (mousePos.y - eyeDim.h) ** 2) ** 0.5;
		let dr = r / DIAG_EYE_DIV;
		let newIrisOp = dr / 10;
		setIrisOp(newIrisOp);
	};
	const handleOnMouseLeave = () => {
		setIrisOp(1);
	};

	return (
		<div
			onMouseMove={(e) => handleOnMouseMove(e)}
			onClick={(e) => handleOnClick(e)}
			className='eye-movetrack'
		>
			<div id='eye-container' className='eye-container'>
				<div
					className='eye-shadow'
					style={{ opacity: `${displayEyeDesign ? 1 : 0}` }}
				></div>
				<div
					id='eye'
					className={`eye ${isEyeAnim ? 'animate' : ''}`}
					onMouseEnter={(e) => handleOnMouseEnterEye(e)}
					onMouseLeave={() => handleOnMouseLeave()}
				>
					<div className='wonder' style={{ opacity: op }}>
						{displayEyeDesign && <img src={UNI_GIF} alt='uni' />}
					</div>
					{displayEyeDesign && (
						<div
							id='iris'
							className='iris'
							style={{ left: irisPos.x, top: irisPos.y, opacity: irisOp }}
						></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Eyeball;
