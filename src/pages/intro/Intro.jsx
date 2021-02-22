import React, { useContext } from 'react';
import Eyeball from '../../components/eyeball/Eyeball';
import mirinnesContext from '../../context/mirinnesContext';
import './intro.scss';
function Intro() {
	const { displayIntro } = useContext(mirinnesContext);
	console.log('displayIntro', displayIntro);
	return <>{displayIntro ? <Eyeball /> : <div className='main'></div>}</>;
}

export default Intro;
